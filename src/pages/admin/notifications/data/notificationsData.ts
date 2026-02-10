import type { Notification } from '../types/notification.types'

export const notificationsData: Notification[] = [
  {
    id: '1',
    type: 'TASK_ASSIGNED',
    priority: 'HIGH',
    title: 'New Task Assigned: Implement Authentication',
    message: 'Sarah Johnson assigned you a new task in E-Commerce Platform project',
    timestamp: '2026-02-10 10:30 AM',
    isRead: false,
    actionUrl: '/admin/tasks/2',
    metadata: {
      taskId: '2',
      projectName: 'E-Commerce Platform',
      assignedBy: 'Sarah Johnson'
    }
  },
  {
    id: '2',
    type: 'TICKET_UPDATE',
    priority: 'URGENT',
    title: 'Ticket TKT-1001 Status Updated',
    message: 'Login page responsiveness issue has been moved to In Progress',
    timestamp: '2026-02-10 09:45 AM',
    isRead: false,
    actionUrl: '/admin/tickets/TKT-1001',
    metadata: {
      ticketId: 'TKT-1001'
    }
  },
  {
    id: '3',
    type: 'APPROVAL_REQUEST',
    priority: 'HIGH',
    title: 'Expense Approval Required',
    message: 'Michael Chen requested approval for $6,500 equipment purchase',
    timestamp: '2026-02-10 09:15 AM',
    isRead: false,
    actionUrl: '/admin/finance',
    metadata: {
      requestedBy: 'Michael Chen'
    }
  },
  {
    id: '4',
    type: 'SYSTEM_ALERT',
    priority: 'MEDIUM',
    title: 'System Maintenance Scheduled',
    message: 'Scheduled maintenance on Feb 15, 2026 from 2:00 AM to 4:00 AM',
    timestamp: '2026-02-10 08:00 AM',
    isRead: false
  },
  {
    id: '5',
    type: 'TASK_ASSIGNED',
    priority: 'MEDIUM',
    title: 'New Task Assigned: Update Documentation',
    message: 'David Kumar assigned you a documentation task',
    timestamp: '2026-02-09 04:30 PM',
    isRead: true,
    actionUrl: '/admin/tasks/4',
    metadata: {
      taskId: '4',
      projectName: 'E-Commerce Platform',
      assignedBy: 'David Kumar'
    }
  },
  {
    id: '6',
    type: 'TICKET_UPDATE',
    priority: 'LOW',
    title: 'Ticket TKT-1004 Resolved',
    message: 'Email notification issue has been successfully resolved',
    timestamp: '2026-02-09 03:20 PM',
    isRead: true,
    actionUrl: '/admin/tickets/TKT-1004',
    metadata: {
      ticketId: 'TKT-1004'
    }
  },
  {
    id: '7',
    type: 'APPROVAL_REQUEST',
    priority: 'MEDIUM',
    title: 'Leave Request Pending',
    message: 'Alex Martinez submitted a leave request for Feb 12-13',
    timestamp: '2026-02-09 02:15 PM',
    isRead: true,
    actionUrl: '/admin/attendance',
    metadata: {
      requestedBy: 'Alex Martinez'
    }
  },
  {
    id: '8',
    type: 'SYSTEM_ALERT',
    priority: 'LOW',
    title: 'Monthly Report Generated',
    message: 'Your January 2026 performance report is ready to view',
    timestamp: '2026-02-09 01:00 PM',
    isRead: true,
    actionUrl: '/admin/reports'
  },
  {
    id: '9',
    type: 'TASK_ASSIGNED',
    priority: 'URGENT',
    title: 'Critical Task: Fix Production Bug',
    message: 'Sarah Johnson assigned you a critical bug fix task',
    timestamp: '2026-02-09 11:30 AM',
    isRead: true,
    actionUrl: '/admin/tasks/7',
    metadata: {
      taskId: '7',
      projectName: 'E-Commerce Platform',
      assignedBy: 'Sarah Johnson'
    }
  },
  {
    id: '10',
    type: 'TICKET_UPDATE',
    priority: 'MEDIUM',
    title: 'Ticket TKT-1003 Comment Added',
    message: 'Emily Rodriguez added a comment to your ticket',
    timestamp: '2026-02-09 10:00 AM',
    isRead: true,
    actionUrl: '/admin/tickets/TKT-1003',
    metadata: {
      ticketId: 'TKT-1003'
    }
  }
]
