export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'COMPLETED' | 'BLOCKED'
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'

export interface Task {
  id: string
  title: string
  description: string
  project: string
  assignedTo: string
  priority: TaskPriority
  status: TaskStatus
  deadline: string
  createdAt: string
}

export interface TaskComment {
  id: string
  author: string
  content: string
  timestamp: string
}

export interface TaskAttachment {
  id: string
  name: string
  size: string
  uploadedBy: string
  uploadedAt: string
}

export interface TaskTimeLog {
  id: string
  user: string
  hours: number
  date: string
  description: string
}

export interface TaskStatusHistory {
  id: string
  status: TaskStatus
  changedBy: string
  timestamp: string
}
