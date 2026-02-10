import type { CompanyProfile, WorkingHours, Holiday, Role, AttendanceRule, NotificationRule } from '../types/settings.types'

export const companyProfileData: CompanyProfile = {
  name: 'ISPM Technologies',
  email: 'contact@ispm.com',
  phone: '+1 (555) 123-4567',
  address: '123 Business Street, Tech City, TC 12345',
  website: 'https://www.ispm.com'
}

export const workingHoursData: WorkingHours = {
  monday: { start: '09:00', end: '18:00', isWorkingDay: true },
  tuesday: { start: '09:00', end: '18:00', isWorkingDay: true },
  wednesday: { start: '09:00', end: '18:00', isWorkingDay: true },
  thursday: { start: '09:00', end: '18:00', isWorkingDay: true },
  friday: { start: '09:00', end: '18:00', isWorkingDay: true },
  saturday: { start: '09:00', end: '13:00', isWorkingDay: false },
  sunday: { start: '09:00', end: '18:00', isWorkingDay: false }
}

export const holidaysData: Holiday[] = [
  { id: '1', name: 'New Year\'s Day', date: '2026-01-01', type: 'PUBLIC' },
  { id: '2', name: 'Independence Day', date: '2026-07-04', type: 'PUBLIC' },
  { id: '3', name: 'Thanksgiving', date: '2026-11-26', type: 'PUBLIC' },
  { id: '4', name: 'Christmas', date: '2026-12-25', type: 'PUBLIC' },
  { id: '5', name: 'Company Anniversary', date: '2026-03-15', type: 'COMPANY' },
  { id: '6', name: 'Team Building Day', date: '2026-06-20', type: 'OPTIONAL' }
]

export const rolesData: Role[] = [
  {
    id: '1',
    name: 'Administrator',
    description: 'Full system access with all permissions',
    permissions: ['all'],
    userCount: 3
  },
  {
    id: '2',
    name: 'Project Manager',
    description: 'Manage projects, tasks, and team members',
    permissions: ['projects.manage', 'tasks.manage', 'team.view'],
    userCount: 8
  },
  {
    id: '3',
    name: 'Team Lead',
    description: 'Lead team activities and approve requests',
    permissions: ['tasks.manage', 'attendance.approve', 'reports.view'],
    userCount: 12
  },
  {
    id: '4',
    name: 'Employee',
    description: 'Basic access to assigned tasks and personal data',
    permissions: ['tasks.view', 'attendance.mark', 'profile.edit'],
    userCount: 105
  }
]

export const attendanceRulesData: AttendanceRule[] = [
  {
    id: '1',
    name: 'Late Check-in Alert',
    description: 'Send notification when employee checks in after 9:15 AM',
    enabled: true
  },
  {
    id: '2',
    name: 'Auto Mark Absent',
    description: 'Automatically mark as absent if no check-in by 11:00 AM',
    enabled: true
  },
  {
    id: '3',
    name: 'Early Check-out Warning',
    description: 'Alert when employee checks out before scheduled time',
    enabled: false
  },
  {
    id: '4',
    name: 'Overtime Tracking',
    description: 'Track and notify when working hours exceed 9 hours',
    enabled: true
  }
]

export const notificationRulesData: NotificationRule[] = [
  {
    id: '1',
    type: 'Task Assignment',
    enabled: true,
    channels: ['email', 'in-app']
  },
  {
    id: '2',
    type: 'Ticket Updates',
    enabled: true,
    channels: ['in-app', 'push']
  },
  {
    id: '3',
    type: 'Approval Requests',
    enabled: true,
    channels: ['email', 'in-app', 'push']
  },
  {
    id: '4',
    type: 'System Alerts',
    enabled: true,
    channels: ['email', 'in-app']
  },
  {
    id: '5',
    type: 'Daily Reports',
    enabled: false,
    channels: ['email']
  }
]
