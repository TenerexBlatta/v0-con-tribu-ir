-- Fixed to use profiles table instead of users table
-- Create the admin user account
-- Email: admin@contribuir.org
-- Password: ConTribuIr2024!
-- This will be the permanent admin account

-- Note: The actual auth user must be created through the signup process
-- This script just ensures the admin role is properly set when they sign up

-- Update the trigger to handle the admin email specifically
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', 'Usuario'),
    case 
      when new.email = 'admin@contribuir.org' then 'admin'
      else coalesce(new.raw_user_meta_data ->> 'role', 'user')
    end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Ensure the trigger is properly set
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
