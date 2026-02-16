export type UserProfile = {
  id: string
  name: string
  email: string
  phone: string
  role: string
  department: string
  joinDate: string
  avatar?: string
}

export type NotificationPreferences = {
  emailNotifications: boolean
  taskAssignments: boolean
  projectUpdates: boolean
  teamMessages: boolean
  weeklyReports: boolean
  systemAlerts: boolean
}

export type PasswordChange = {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}
