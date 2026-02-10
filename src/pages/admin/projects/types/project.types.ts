export type ProjectStatus = 'ACTIVE' | 'ON_HOLD' | 'COMPLETED' | 'ARCHIVED'

export interface Project {
  id: string
  name: string
  lead: string
  status: ProjectStatus
  teamSize: number
  progress: number
  deadline: string
  description?: string
  budget?: number
}

export interface TeamMember {
  id: string
  name: string
  email: string
  role: string
  avatar?: string
}

export interface ProjectTask {
  id: string
  title: string
  status: 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE'
  assignee: string
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
  dueDate: string
}

export interface ProjectTicket {
  id: string
  title: string
  type: 'BUG' | 'FEATURE' | 'SUPPORT'
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED'
  assignee: string
  isBlocker: boolean
}

export interface ProjectFinance {
  income: number
  expense: number
  profit: number
}
