import React, { useContext, useState } from 'react'

interface IUserContext {
  user: IUser | null
  isHolder: boolean
  setUser: (user: IUser) => void
  setIsHolder: (isHolder: boolean) => void
  processedAuth: boolean
  setProcessedAuth: (processedAuth: boolean) => void
}

interface IUserProvider {
  children: React.ReactNode
}

type IUser = {
  firstName: string
}

const UserContext = React.createContext<IUserContext | null>(null)

function UserProvider({ children }: IUserProvider) {
  const [user, setUser] = useState<IUser | null>(null)
  const [isHolder, setIsHolder] = useState(false)
  const [processedAuth, setProcessedAuth] = useState<boolean>(false)

  return (
    <UserContext.Provider value={{ user, setUser, isHolder, setIsHolder, processedAuth, setProcessedAuth }}>
      {children}
    </UserContext.Provider>
  )
}

function useUser(): IUserContext {
  const context = useContext(UserContext)
  if (context === undefined) throw new Error('useUser must be used within a UserProvider')
  return context as IUserContext
}

export { UserContext, UserProvider, useUser }
