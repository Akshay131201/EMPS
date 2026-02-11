export const summaryStats = {
  activeProjects: 8,
  pendingTasks: 23,
  openTickets: 12,
  pendingApprovals: 5,
  teamMembersOnline: 15,
}

export const taskStatusData = {
  todo: 12,
  inProgress: 8,
  review: 3,
  completed: 45,
}

export const ticketOverview = {
  highPriority: [
    { id: 'TKT-001', title: 'Payment Gateway Integration Issue', project: 'E-Commerce Platform' },
    { id: 'TKT-005', title: 'Database Performance Degradation', project: 'Analytics Dashboard' },
    { id: 'TKT-012', title: 'Critical Security Vulnerability', project: 'User Portal' },
  ],
  blocked: [
    { id: 'TKT-008', title: 'API Documentation Missing', project: 'Mobile App' },
    { id: 'TKT-015', title: 'Third-party Service Down', project: 'Notification System' },
  ],
  waitingResponse: [
    { id: 'TKT-003', title: 'Feature Clarification Needed', project: 'CRM System' },
    { id: 'TKT-009', title: 'Design Assets Required', project: 'Marketing Website' },
  ],
}

export const teamActivityFeed = [
  {
    id: 1,
    type: 'task_completed',
    user: 'Sarah Johnson',
    action: 'completed task',
    target: 'User Authentication Module',
    time: '5 minutes ago',
    icon: '✓',
  },
  {
    id: 2,
    type: 'ticket_resolved',
    user: 'Mike Chen',
    action: 'resolved ticket',
    target: 'TKT-045: Login Page Bug',
    time: '12 minutes ago',
    icon: '🎫',
  },
  {
    id: 3,
    type: 'work_submitted',
    user: 'Emily Davis',
    action: 'submitted self-work',
    target: 'API Integration Documentation',
    time: '25 minutes ago',
    icon: '✋',
  },
  {
    id: 4,
    type: 'attendance',
    user: 'John Smith',
    action: 'checked in',
    target: 'Late arrival - 9:15 AM',
    time: '1 hour ago',
    icon: '⏰',
  },
  {
    id: 5,
    type: 'task_completed',
    user: 'Alex Kumar',
    action: 'completed task',
    target: 'Database Schema Update',
    time: '2 hours ago',
    icon: '✓',
  },
  {
    id: 6,
    type: 'ticket_resolved',
    user: 'Lisa Wang',
    action: 'resolved ticket',
    target: 'TKT-032: Email Notification Issue',
    time: '3 hours ago',
    icon: '🎫',
  },
  {
    id: 7,
    type: 'work_submitted',
    user: 'David Brown',
    action: 'submitted self-work',
    target: 'Code Review Feedback',
    time: '4 hours ago',
    icon: '✋',
  },
  {
    id: 8,
    type: 'attendance',
    user: 'Rachel Green',
    action: 'checked in',
    target: 'On time - 9:00 AM',
    time: '5 hours ago',
    icon: '✓',
  },
]
