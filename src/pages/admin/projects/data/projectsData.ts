import type { Project, TeamMember, ProjectTask, ProjectTicket, ProjectFinance } from '../types/project.types'

export const projectsData: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    lead: 'Sarah Johnson',
    status: 'ACTIVE',
    teamSize: 8,
    progress: 67,
    deadline: '2026-04-15',
    description: 'Building a modern e-commerce platform with advanced features',
    budget: 150000
  },
  {
    id: '2',
    name: 'Mobile App Redesign',
    lead: 'Michael Chen',
    status: 'ACTIVE',
    teamSize: 5,
    progress: 45,
    deadline: '2026-03-30',
    description: 'Complete redesign of mobile application',
    budget: 80000
  },
  {
    id: '3',
    name: 'API Integration',
    lead: 'David Kumar',
    status: 'ON_HOLD',
    teamSize: 3,
    progress: 30,
    deadline: '2026-05-20',
    description: 'Third-party API integration project'
  },
  {
    id: '4',
    name: 'Dashboard Analytics',
    lead: 'Emily Rodriguez',
    status: 'COMPLETED',
    teamSize: 4,
    progress: 100,
    deadline: '2026-02-01',
    description: 'Analytics dashboard for business intelligence'
  }
]

export const teamMembersData: TeamMember[] = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah@company.com', role: 'Project Lead' },
  { id: '2', name: 'Michael Chen', email: 'michael@company.com', role: 'Frontend Developer' },
  { id: '3', name: 'David Kumar', email: 'david@company.com', role: 'Backend Developer' },
  { id: '4', name: 'Emily Rodriguez', email: 'emily@company.com', role: 'UI/UX Designer' },
  { id: '5', name: 'James Wilson', email: 'james@company.com', role: 'QA Engineer' }
]

export const projectTasksData: ProjectTask[] = [
  { id: '1', title: 'Design homepage mockup', status: 'DONE', assignee: 'Emily Rodriguez', priority: 'HIGH', dueDate: '2026-02-15' },
  { id: '2', title: 'Implement authentication', status: 'IN_PROGRESS', assignee: 'David Kumar', priority: 'HIGH', dueDate: '2026-02-20' },
  { id: '3', title: 'Setup payment gateway', status: 'TODO', assignee: 'Michael Chen', priority: 'MEDIUM', dueDate: '2026-02-25' },
  { id: '4', title: 'Write API documentation', status: 'REVIEW', assignee: 'Sarah Johnson', priority: 'LOW', dueDate: '2026-02-18' },
  { id: '5', title: 'Product catalog integration', status: 'TODO', assignee: 'Michael Chen', priority: 'HIGH', dueDate: '2026-02-22' }
]

export const projectTicketsData: ProjectTicket[] = [
  { id: '1', title: 'Login page not responsive', type: 'BUG', priority: 'HIGH', status: 'IN_PROGRESS', assignee: 'Michael Chen', isBlocker: true },
  { id: '2', title: 'Add dark mode support', type: 'FEATURE', priority: 'MEDIUM', status: 'OPEN', assignee: 'Emily Rodriguez', isBlocker: false },
  { id: '3', title: 'Payment processing timeout', type: 'BUG', priority: 'CRITICAL', status: 'OPEN', assignee: 'David Kumar', isBlocker: true },
  { id: '4', title: 'Email notification setup', type: 'SUPPORT', priority: 'LOW', status: 'RESOLVED', assignee: 'James Wilson', isBlocker: false }
]

export const projectFinanceData: ProjectFinance = {
  income: 150000,
  expense: 98000,
  profit: 52000
}
