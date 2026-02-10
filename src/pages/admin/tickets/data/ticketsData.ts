import type { Ticket, TicketDiscussion, TicketSolution, TicketStatusTimeline, TicketAttachment } from '../types/ticket.types'

export const ticketsData: Ticket[] = [
  {
    id: 'TKT-1001',
    title: 'Login page not responsive on mobile devices',
    description: 'The login page breaks on mobile screens below 768px width. Form elements overlap and submit button is not visible.',
    type: 'BUG',
    project: 'E-Commerce Platform',
    createdBy: 'John Smith',
    assignedTo: 'Michael Chen',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    slaTime: '4h remaining',
    createdAt: '2026-02-10 09:30 AM'
  },
  {
    id: 'TKT-1002',
    title: 'Payment processing timeout error',
    description: 'Users experiencing timeout errors during payment processing. Error occurs after 30 seconds of processing.',
    type: 'INCIDENT',
    project: 'E-Commerce Platform',
    createdBy: 'Sarah Johnson',
    assignedTo: 'David Kumar',
    status: 'OPEN',
    priority: 'CRITICAL',
    slaTime: '1h remaining',
    createdAt: '2026-02-10 11:15 AM'
  },
  {
    id: 'TKT-1003',
    title: 'Add dark mode support',
    description: 'Request to implement dark mode theme across the entire application for better user experience.',
    type: 'FEATURE',
    project: 'E-Commerce Platform',
    createdBy: 'Emily Rodriguez',
    assignedTo: 'Emily Rodriguez',
    status: 'PENDING',
    priority: 'MEDIUM',
    slaTime: '2d remaining',
    createdAt: '2026-02-09 02:45 PM'
  },
  {
    id: 'TKT-1004',
    title: 'Email notifications not working',
    description: 'Users not receiving email notifications for order confirmations and password resets.',
    type: 'BUG',
    project: 'E-Commerce Platform',
    createdBy: 'James Wilson',
    assignedTo: 'David Kumar',
    status: 'RESOLVED',
    priority: 'HIGH',
    slaTime: 'Completed',
    createdAt: '2026-02-08 10:00 AM'
  },
  {
    id: 'TKT-1005',
    title: 'Database query optimization needed',
    description: 'Product listing page is slow. Database queries need optimization and proper indexing.',
    type: 'SUPPORT',
    project: 'E-Commerce Platform',
    createdBy: 'Sarah Johnson',
    assignedTo: 'David Kumar',
    status: 'IN_PROGRESS',
    priority: 'MEDIUM',
    slaTime: '1d remaining',
    createdAt: '2026-02-09 04:20 PM'
  },
  {
    id: 'TKT-1006',
    title: 'API rate limiting implementation',
    description: 'Need to implement rate limiting on public APIs to prevent abuse and ensure fair usage.',
    type: 'FEATURE',
    project: 'API Integration',
    createdBy: 'Michael Chen',
    assignedTo: 'David Kumar',
    status: 'OPEN',
    priority: 'LOW',
    slaTime: '5d remaining',
    createdAt: '2026-02-07 01:30 PM'
  },
  {
    id: 'TKT-1007',
    title: 'Dashboard charts not loading',
    description: 'Analytics dashboard charts fail to load intermittently. Console shows CORS errors.',
    type: 'BUG',
    project: 'Dashboard Analytics',
    createdBy: 'Emily Rodriguez',
    assignedTo: 'Michael Chen',
    status: 'CLOSED',
    priority: 'MEDIUM',
    slaTime: 'Completed',
    createdAt: '2026-02-06 03:15 PM'
  },
  {
    id: 'TKT-1008',
    title: 'Server downtime - urgent investigation',
    description: 'Production server experiencing intermittent downtime. Needs immediate investigation and resolution.',
    type: 'INCIDENT',
    project: 'E-Commerce Platform',
    createdBy: 'Sarah Johnson',
    assignedTo: 'James Wilson',
    status: 'IN_PROGRESS',
    priority: 'CRITICAL',
    slaTime: '30m remaining',
    createdAt: '2026-02-10 01:45 PM'
  }
]

export const ticketDiscussionData: TicketDiscussion[] = [
  {
    id: '1',
    author: 'John Smith',
    role: 'Reporter',
    content: 'I tested this on iPhone 12 and Samsung Galaxy S21. Both devices show the same issue. The form fields are completely misaligned.',
    timestamp: '2026-02-10 09:35 AM',
    isAdminComment: false
  },
  {
    id: '2',
    author: 'Michael Chen',
    role: 'Developer',
    content: 'Thanks for reporting. I can reproduce the issue. It seems to be a CSS flexbox problem. Working on a fix now.',
    timestamp: '2026-02-10 10:15 AM',
    isAdminComment: false
  },
  {
    id: '3',
    author: 'Sarah Johnson',
    role: 'Admin',
    content: '[ADMIN] This is a high priority issue affecting mobile users. Please prioritize and provide ETA.',
    timestamp: '2026-02-10 11:00 AM',
    isAdminComment: true
  },
  {
    id: '4',
    author: 'Michael Chen',
    role: 'Developer',
    content: 'ETA: 2 hours. I\'ve identified the root cause and testing the fix locally.',
    timestamp: '2026-02-10 11:30 AM',
    isAdminComment: false
  },
  {
    id: '5',
    author: 'James Wilson',
    role: 'QA Engineer',
    content: 'I\'ll be ready to test once the fix is deployed to staging.',
    timestamp: '2026-02-10 12:00 PM',
    isAdminComment: false
  }
]

export const ticketSolutionData: TicketSolution[] = [
  {
    id: '1',
    author: 'Michael Chen',
    solution: 'Fixed CSS flexbox layout by adding proper media queries for mobile breakpoints. Updated form container to use flex-direction: column on screens below 768px.',
    timestamp: '2026-02-10 01:30 PM',
    verified: false
  },
  {
    id: '2',
    author: 'Michael Chen',
    solution: 'Additional fix: Adjusted padding and margins for better spacing on small screens. Tested on multiple devices.',
    timestamp: '2026-02-10 02:15 PM',
    verified: false
  }
]

export const ticketStatusTimelineData: TicketStatusTimeline[] = [
  {
    id: '1',
    status: 'OPEN',
    changedBy: 'System',
    timestamp: '2026-02-10 09:30 AM',
    note: 'Ticket created by John Smith'
  },
  {
    id: '2',
    status: 'IN_PROGRESS',
    changedBy: 'Michael Chen',
    timestamp: '2026-02-10 10:15 AM',
    note: 'Started working on the issue'
  },
  {
    id: '3',
    status: 'PENDING',
    changedBy: 'Michael Chen',
    timestamp: '2026-02-10 01:30 PM',
    note: 'Awaiting QA verification'
  }
]

export const ticketAttachmentsData: TicketAttachment[] = [
  {
    id: '1',
    name: 'mobile-screenshot-1.png',
    size: '342 KB',
    type: 'image/png',
    uploadedBy: 'John Smith',
    uploadedAt: '2026-02-10 09:30 AM'
  },
  {
    id: '2',
    name: 'mobile-screenshot-2.png',
    size: '298 KB',
    type: 'image/png',
    uploadedBy: 'John Smith',
    uploadedAt: '2026-02-10 09:31 AM'
  },
  {
    id: '3',
    name: 'error-log.txt',
    size: '12 KB',
    type: 'text/plain',
    uploadedBy: 'Michael Chen',
    uploadedAt: '2026-02-10 10:20 AM'
  }
]
