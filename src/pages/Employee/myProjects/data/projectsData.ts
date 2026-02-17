import type { EmployeeProject, ProjectTask, ProjectTicket, TeamMember, Discussion } from '../types/project.types'

export const employeeProjects: EmployeeProject[] = [
  {
    id: 'P001',
    projectName: 'E-Commerce Platform',
    role: 'Frontend Developer',
    progress: 75,
    taskCount: 12,
    description: 'Building a modern e-commerce platform with React and TypeScript. Features include product catalog, shopping cart, payment integration, and order management.',
    timeline: {
      startDate: '2026-01-15',
      endDate: '2026-04-30',
    },
    leadName: 'Sarah Johnson',
    status: 'active',
    teamSize: 8,
  },
  {
    id: 'P002',
    projectName: 'CRM System',
    role: 'Full Stack Developer',
    progress: 45,
    taskCount: 8,
    description: 'Customer Relationship Management system for managing client interactions, sales pipeline, and customer data analytics.',
    timeline: {
      startDate: '2026-02-01',
      endDate: '2026-05-15',
    },
    leadName: 'Mike Chen',
    status: 'active',
    teamSize: 6,
  },
  {
    id: 'P003',
    projectName: 'Mobile App Backend',
    role: 'Backend Developer',
    progress: 60,
    taskCount: 10,
    description: 'RESTful API development for mobile application with authentication, data management, and real-time notifications.',
    timeline: {
      startDate: '2025-12-10',
      endDate: '2026-03-20',
    },
    leadName: 'Sarah Johnson',
    status: 'active',
    teamSize: 5,
  },
  {
    id: 'P004',
    projectName: 'Analytics Dashboard',
    role: 'Frontend Developer',
    progress: 90,
    taskCount: 5,
    description: 'Data visualization dashboard with charts, graphs, and real-time analytics for business intelligence.',
    timeline: {
      startDate: '2025-11-01',
      endDate: '2026-02-28',
    },
    leadName: 'David Lee',
    status: 'active',
    teamSize: 4,
  },
]

export const getProjectTasks = (projectId: string): ProjectTask[] => {
  return [
    {
      id: `${projectId}-T001`,
      taskName: 'Implement User Authentication',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2026-02-20',
      assignedTo: 'You',
    },
    {
      id: `${projectId}-T002`,
      taskName: 'Design Product Listing Page',
      status: 'completed',
      priority: 'medium',
      dueDate: '2026-02-15',
      assignedTo: 'You',
    },
    {
      id: `${projectId}-T003`,
      taskName: 'Integrate Payment Gateway',
      status: 'todo',
      priority: 'critical',
      dueDate: '2026-02-25',
      assignedTo: 'You',
    },
    {
      id: `${projectId}-T004`,
      taskName: 'Write Unit Tests',
      status: 'review',
      priority: 'medium',
      dueDate: '2026-02-22',
      assignedTo: 'You',
    },
    {
      id: `${projectId}-T005`,
      taskName: 'Optimize Performance',
      status: 'todo',
      priority: 'low',
      dueDate: '2026-03-01',
      assignedTo: 'You',
    },
  ]
}

export const getProjectTickets = (projectId: string): ProjectTicket[] => {
  return [
    {
      id: `${projectId}-TKT001`,
      title: 'Login page not responsive on mobile',
      status: 'in-progress',
      priority: 'high',
      createdDate: '2026-02-15',
      assignedTo: 'You',
    },
    {
      id: `${projectId}-TKT002`,
      title: 'Fix cart calculation bug',
      status: 'open',
      priority: 'critical',
      createdDate: '2026-02-16',
      assignedTo: 'You',
    },
    {
      id: `${projectId}-TKT003`,
      title: 'Update product images',
      status: 'resolved',
      priority: 'low',
      createdDate: '2026-02-10',
      assignedTo: 'You',
    },
  ]
}

export const getTeamMembers = (projectId: string): TeamMember[] => {
  return [
    { id: '1', name: 'Sarah Johnson', role: 'Project Lead' },
    { id: '2', name: 'John Doe', role: 'Frontend Developer' },
    { id: '3', name: 'Mike Chen', role: 'Backend Developer' },
    { id: '4', name: 'Emily Davis', role: 'UI/UX Designer' },
    { id: '5', name: 'David Lee', role: 'QA Engineer' },
    { id: '6', name: 'Lisa Wang', role: 'DevOps Engineer' },
  ]
}

export const getDiscussions = (projectId: string): Discussion[] => {
  return [
    {
      id: '1',
      author: 'Sarah Johnson',
      message: 'Great progress on the authentication module! Let\'s review it in tomorrow\'s standup.',
      timestamp: '2026-02-17 10:30 AM',
    },
    {
      id: '2',
      author: 'Mike Chen',
      message: 'I\'ve updated the API documentation. Please review when you get a chance.',
      timestamp: '2026-02-17 09:15 AM',
    },
    {
      id: '3',
      author: 'John Doe',
      message: 'The payment gateway integration is more complex than expected. We might need an extra day.',
      timestamp: '2026-02-16 04:45 PM',
    },
  ]
}
