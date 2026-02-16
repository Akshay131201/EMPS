import type { UserProfile, NotificationPreferences } from '../types/settings.types'

export const userProfile: UserProfile = {
  id: 'TL-001',
  name: 'John Anderson',
  email: 'john.anderson@company.com',
  phone: '+1 (555) 123-4567',
  role: 'Team Lead',
  department: 'Engineering',
  joinDate: '2024-01-15',
}

export const notificationPreferences: NotificationPreferences = {
  emailNotifications: true,
  taskAssignments: true,
  projectUpdates: true,
  teamMessages: false,
  weeklyReports: true,
  systemAlerts: true,
}
