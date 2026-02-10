import type { Task, TaskComment, TaskAttachment, TaskTimeLog, TaskStatusHistory } from '../types/task.types'

export const tasksData: Task[] = [
  {
    id: '1',
    title: 'Design homepage mockup',
    description: 'Create a modern homepage design with hero section, features, and CTA',
    project: 'E-Commerce Platform',
    assignedTo: 'Emily Rodriguez',
    priority: 'HIGH',
    status: 'COMPLETED',
    deadline: '2026-02-15',
    createdAt: '2026-02-01'
  },
  {
    id: '2',
    title: 'Implement authentication system',
    description: 'Build JWT-based authentication with refresh tokens and role-based access control',
    project: 'E-Commerce Platform',
    assignedTo: 'David Kumar',
    priority: 'URGENT',
    status: 'IN_PROGRESS',
    deadline: '2026-02-20',
    createdAt: '2026-02-05'
  },
  {
    id: '3',
    title: 'Setup payment gateway integration',
    description: 'Integrate Stripe payment processing with webhook handling',
    project: 'E-Commerce Platform',
    assignedTo: 'Michael Chen',
    priority: 'HIGH',
    status: 'TODO',
    deadline: '2026-02-25',
    createdAt: '2026-02-08'
  },
  {
    id: '4',
    title: 'Write API documentation',
    description: 'Document all REST API endpoints with examples and response schemas',
    project: 'E-Commerce Platform',
    assignedTo: 'Sarah Johnson',
    priority: 'MEDIUM',
    status: 'REVIEW',
    deadline: '2026-02-18',
    createdAt: '2026-02-03'
  },
  {
    id: '5',
    title: 'Mobile app UI redesign',
    description: 'Redesign mobile app interface following new brand guidelines',
    project: 'Mobile App Redesign',
    assignedTo: 'Emily Rodriguez',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    deadline: '2026-03-01',
    createdAt: '2026-02-10'
  },
  {
    id: '6',
    title: 'Database optimization',
    description: 'Optimize slow queries and add proper indexes',
    project: 'API Integration',
    assignedTo: 'David Kumar',
    priority: 'MEDIUM',
    status: 'TODO',
    deadline: '2026-02-28',
    createdAt: '2026-02-12'
  },
  {
    id: '7',
    title: 'Fix login page responsiveness',
    description: 'Login page breaks on mobile devices, needs responsive fixes',
    project: 'E-Commerce Platform',
    assignedTo: 'Michael Chen',
    priority: 'URGENT',
    status: 'BLOCKED',
    deadline: '2026-02-16',
    createdAt: '2026-02-11'
  },
  {
    id: '8',
    title: 'Setup CI/CD pipeline',
    description: 'Configure automated testing and deployment pipeline',
    project: 'Dashboard Analytics',
    assignedTo: 'James Wilson',
    priority: 'LOW',
    status: 'TODO',
    deadline: '2026-03-05',
    createdAt: '2026-02-09'
  }
]

export const taskCommentsData: TaskComment[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    content: 'Great progress on this! The authentication flow looks solid.',
    timestamp: '2026-02-14 10:30 AM'
  },
  {
    id: '2',
    author: 'David Kumar',
    content: 'Thanks! I\'m working on the refresh token logic now. Should be done by EOD.',
    timestamp: '2026-02-14 11:15 AM'
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    content: 'Do we need to support OAuth providers as well?',
    timestamp: '2026-02-14 02:45 PM'
  },
  {
    id: '4',
    author: 'Sarah Johnson',
    content: 'Yes, let\'s add Google and GitHub OAuth in the next sprint.',
    timestamp: '2026-02-14 03:20 PM'
  }
]

export const taskAttachmentsData: TaskAttachment[] = [
  {
    id: '1',
    name: 'auth-flow-diagram.png',
    size: '245 KB',
    uploadedBy: 'David Kumar',
    uploadedAt: '2026-02-13'
  },
  {
    id: '2',
    name: 'api-specs.pdf',
    size: '1.2 MB',
    uploadedBy: 'Sarah Johnson',
    uploadedAt: '2026-02-12'
  },
  {
    id: '3',
    name: 'test-cases.xlsx',
    size: '89 KB',
    uploadedBy: 'James Wilson',
    uploadedAt: '2026-02-14'
  }
]

export const taskTimeLogsData: TaskTimeLog[] = [
  {
    id: '1',
    user: 'David Kumar',
    hours: 4.5,
    date: '2026-02-13',
    description: 'Implemented JWT token generation and validation'
  },
  {
    id: '2',
    user: 'David Kumar',
    hours: 3.0,
    date: '2026-02-14',
    description: 'Added refresh token logic and middleware'
  },
  {
    id: '3',
    user: 'David Kumar',
    hours: 2.5,
    date: '2026-02-15',
    description: 'Testing and bug fixes'
  }
]

export const taskStatusHistoryData: TaskStatusHistory[] = [
  {
    id: '1',
    status: 'TODO',
    changedBy: 'Sarah Johnson',
    timestamp: '2026-02-05 09:00 AM'
  },
  {
    id: '2',
    status: 'IN_PROGRESS',
    changedBy: 'David Kumar',
    timestamp: '2026-02-13 10:30 AM'
  },
  {
    id: '3',
    status: 'REVIEW',
    changedBy: 'David Kumar',
    timestamp: '2026-02-15 04:45 PM'
  }
]
