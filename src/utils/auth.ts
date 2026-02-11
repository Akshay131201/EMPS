// Dummy user data for testing
export const DUMMY_USERS = [
  {
    email: 'admin@ispm.com',
    password: 'admin123',
    fullName: 'Admin User',
    role: 'admin',
  },
  {
    email: 'teamlead@ispm.com',
    password: 'lead123',
    fullName: 'Team Lead',
    role: 'teamlead',
  },
  {
    email: 'user@ispm.com',
    password: 'user123',
    fullName: 'Regular User',
    role: 'user',
  },
]

// Simple authentication functions
export const login = (email: string, password: string) => {
  const user = DUMMY_USERS.find(
    (u) => u.email === email && u.password === password
  )

  if (user) {
    // Store user in localStorage
    localStorage.setItem('ispm_user', JSON.stringify({
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    }))
    return { success: true, user }
  }

  return { success: false, error: 'Invalid email or password' }
}

export const signup = (fullName: string, email: string, password: string) => {
  // Check if user already exists
  const existingUser = DUMMY_USERS.find((u) => u.email === email)
  
  if (existingUser) {
    return { success: false, error: 'User already exists' }
  }

  // In a real app, you'd save this to a database
  const newUser = {
    email,
    fullName,
    role: 'user',
  }

  localStorage.setItem('ispm_user', JSON.stringify(newUser))
  return { success: true, user: newUser }
}

export const logout = () => {
  localStorage.removeItem('ispm_user')
}

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('ispm_user')
  if (userStr) {
    try {
      return JSON.parse(userStr)
    } catch {
      return null
    }
  }
  return null
}

export const isAuthenticated = () => {
  return getCurrentUser() !== null
}
