"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AdminContextType {
  isAdmin: boolean
  setIsAdmin: (value: boolean) => void
  userRole: "admin" | "mentor" | "user"
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)

  const userRole: "admin" | "mentor" | "user" = isAdmin ? "admin" : "mentor"

  return <AdminContext.Provider value={{ isAdmin, setIsAdmin, userRole }}>{children}</AdminContext.Provider>
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider")
  }
  return context
}
