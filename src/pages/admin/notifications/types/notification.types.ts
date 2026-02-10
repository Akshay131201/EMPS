export type NotificationType = 'TASK_ASSIGNED' | 'TICKET_UPDATE' | 'APPROVAL_REQUEST' | 'SYSTEM_ALERT'
export type NotificationPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'

export interface Notification {
  id: string
  type: NotificationType
  priority: NotificationPriority
  title: string
  message: string
  timestamp: string
  isRead: boolean
  actionUrl?: string
  metadata?: {
    taskId?: string
    ticketId?: string
    projectName?: string
    assignedBy?: string
    requestedBy?: string
  }
}
