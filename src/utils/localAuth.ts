import { getItem, setItem, removeItem } from './localStorage'

export type LocalUser = {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  address: string
  image?: string
  role: string
}

const USERS_KEY = 'localUsers'
const CURRENT_USER_KEY = 'currentUser'
const TOKEN_KEY = 'authToken'

export const registerUser = (user: LocalUser): { success: boolean; message: string } => {
  const users = getItem<LocalUser[]>(USERS_KEY) || []
  if (users.find(u => u.email === user.email)) {
    return { success: false, message: 'User already exists' }
  }
  users.push(user)
  setItem(USERS_KEY, users)
  return { success: true, message: 'Registration successful' }
}

export const loginUser = (email: string, password: string): { success: boolean; user?: LocalUser; message?: string } => {
  const users = getItem<LocalUser[]>(USERS_KEY) || []
  const found = users.find(u => u.email === email && u.password === password)
  if (!found) return { success: false, message: 'Invalid credentials' }
  setItem(CURRENT_USER_KEY, found)
  setItem(TOKEN_KEY, 'local-auth')
  return { success: true, user: found }
}

export const logoutUser = () => {
  removeItem(CURRENT_USER_KEY)
  removeItem(TOKEN_KEY)
}

export const updateCurrentUser = (updates: Partial<LocalUser>): LocalUser | null => {
  const current = getCurrentUser()
  if (!current) return null
  const users = getItem<LocalUser[]>(USERS_KEY) || []
  const index = users.findIndex(u => u.email === current.email)
  if (index !== -1) {
    users[index] = { ...users[index], ...updates }
    setItem(USERS_KEY, users)
  }
  const updated = { ...current, ...updates }
  setItem(CURRENT_USER_KEY, updated)
  return updated
}

export const getCurrentUser = (): LocalUser | null => {
  return getItem<LocalUser>(CURRENT_USER_KEY)
}

export const getToken = (): string | null => {
  return getItem<string>(TOKEN_KEY)
}
