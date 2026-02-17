export interface Task {
  id: string
  title: string
  description: string
  projectName: string
  projectId: string
  status: 'todo' | 'in-progress' | 'review' | 'completed'
  priority: 'low' | 'medium' | 'high' | 'critical'
  dueDate: string
  timeSpent: number
  estimatedTime: number
  assignedBy: string
  createdDate: string
}

export interface Subtask {
  id: string
  title: string
  completed: boolean
}

export interface Comment {
  id: string
  author: string
  message: string
  timestamp: string
}

export interface Attachment {
  id: string
  fileName: string
  fileSize: string
  uploadedBy: string
  uploadedDate: string
}

export interface TimeLog {
  id: string
  date: string
  hours: number
  description: string
}

export interface TaskDetail extends Task {
  subtasks: Subtask[]
  comments: Comment[]
  attachments: Attachment[]
  timeLogs: TimeLog[]
}
