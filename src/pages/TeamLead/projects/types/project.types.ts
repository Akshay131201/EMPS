export type Project = {
  id: string
  name: string
  description: string
  progress: number
  deadline: string
  teamMembersCount: number
  openTasks: number
  status: 'active' | 'on-hold' | 'completed' | 'at-risk'
  timeline: {
    startDate: string
    endDate: string
  }
  completionStats: {
    totalTasks: number
    completedTasks: number
    totalTickets: number
    resolvedTickets: number
  }
}

export type TeamMember = {
  id: string
  name: string
  role: string
  avatar: string
  workload: number
  tasksAssigned: number
}

export type Task = {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'review' | 'done'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  assignedTo: string
  dueDate: string
}

export type Ticket = {
  id: string
  title: string
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  assignedTo: string
  createdDate: string
}
