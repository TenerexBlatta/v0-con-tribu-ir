-- Fix admin user creation by removing the placeholder and updating the trigger
-- Remove the placeholder admin user
DELETE FROM public.users WHERE id = '00000000-0000-0000-0000-000000000000';

-- Update the trigger function to handle admin role assignment
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY definer
SET search_path = public
AS $$
BEGIN
  -- Check if this is the admin email and assign admin role
  INSERT INTO public.users (id, email, full_name, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'full_name', ''),
    CASE 
      WHEN new.email = 'admin@contribuir.org' THEN 'admin'
      ELSE COALESCE(new.raw_user_meta_data ->> 'role', 'user')
    END
  );
  RETURN new;
END;
$$;

-- Ensure the trigger is properly set up
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
