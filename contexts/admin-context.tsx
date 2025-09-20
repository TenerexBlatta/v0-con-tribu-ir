"use client"

import React, { createContext, useContext, useState } from 'react'

type UserRole = 'student' | 'mentor' | 'admin'

interface AdminContextType {
  userRole: UserRole
  setUserRole: (role: UserRole) => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole>('student') // valor por defecto

  return (
    <AdminContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
