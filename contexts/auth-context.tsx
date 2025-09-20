"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import { createContext, useContext, useEffect, useState } from "react"

interface UserProfile {
  id: string
  email: string
  full_name: string
  role: "admin" | "mentor" | "user"
}

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  signOut: () => Promise<void>
  supabaseAvailable: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [supabaseAvailable, setSupabaseAvailable] = useState(false)

  useEffect(() => {
    let supabase: ReturnType<typeof createClient> | null = null

    try {
      supabase = createClient()
      setSupabaseAvailable(true)
    } catch (error) {
      console.log("[v0] Supabase not available:", error)
      setSupabaseAvailable(false)
      setLoading(false)
      return
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase!.auth.getSession()
        setUser(session?.user ?? null)

        if (session?.user) {
          // Get user profile
          const { data: profileData } = await supabase!.from("users").select("*").eq("id", session.user.id).single()
          setProfile(profileData)
        }
      } catch (error) {
        console.log("[v0] Error getting session:", error)
      }

      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null)

      if (session?.user) {
        try {
          // Get user profile
          const { data: profileData } = await supabase!.from("users").select("*").eq("id", session.user.id).single()
          setProfile(profileData)
        } catch (error) {
          console.log("[v0] Error getting profile:", error)
        }
      } else {
        setProfile(null)
      }

      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signOut = async () => {
    if (!supabaseAvailable) return

    try {
      const supabase = createClient()
      await supabase.auth.signOut()
    } catch (error) {
      console.log("[v0] Error signing out:", error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, signOut, supabaseAvailable }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
