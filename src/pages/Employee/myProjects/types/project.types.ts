export interface EmployeeProject {
  id: string
  projectName: string
  role: string
  progress: number
  taskCount: number
  description: string
  timeline: {
    startDate: string
    endDate: string
  }
  leadName: string
  status: 'active' | 'completed' | 'on-hold'
  teamSize: number
}

export interface ProjectTask {
  id: string
  taskName: string
  status: 'todo' | 'in-progress' | 'review' | 'completed'
  priority: 'low' | 'medium' | 'high' | 'critical'
  dueDate: string
  assignedTo: string
}

export interface ProjectTicket {
  id: string
  title: string
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  priority: 'low' | 'medium' | 'high' | 'critical'
  createdDate: string
  assignedTo: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar?: string
}

export interface Discussion {
  id: string
  author: string
  message: string
  timestamp: string
  replies?: Discussion[]
}
