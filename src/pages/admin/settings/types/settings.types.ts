export interface CompanyProfile {
  name: string
  email: string
  phone: string
  address: string
  website: string
  logo?: string
}

export interface WorkingHours {
  monday: { start: string; end: string; isWorkingDay: boolean }
  tuesday: { start: string; end: string; isWorkingDay: boolean }
  wednesday: { start: string; end: string; isWorkingDay: boolean }
  thursday: { start: string; end: string; isWorkingDay: boolean }
  friday: { start: string; end: string; isWorkingDay: boolean }
  saturday: { start: string; end: string; isWorkingDay: boolean }
  sunday: { start: string; end: string; isWorkingDay: boolean }
}

export interface Holiday {
  id: string
  name: string
  date: string
  type: 'PUBLIC' | 'COMPANY' | 'OPTIONAL'
}

export interface Role {
  id: string
  name: string
  description: string
  permissions: string[]
  userCount: number
}

export interface Permission {
  id: string
  module: string
  actions: string[]
}

export interface AttendanceRule {
  id: string
  name: string
  description: string
  enabled: boolean
}

export interface NotificationRule {
  id: string
  type: string
  enabled: boolean
  channels: string[]
}
