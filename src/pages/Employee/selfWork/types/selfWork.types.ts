export interface SelfWork {
  id: string
  title: string
  projectName: string
  projectId: string
  workType: string
  status: 'draft' | 'submitted' | 'in-progress' | 'completed' | 'closed'
  approvalState: 'pending' | 'approved' | 'rejected' | 'converted-to-task'
  createdDate: string
  priority: 'low' | 'medium' | 'high'
  estimatedTime: number
}

export interface SelfWorkDetail extends SelfWork {
  description: string
  leadFeedback?: string
  comments: Comment[]
  updates: Update[]
  convertedToTaskId?: string
}

export interface Comment {
  id: string
  author: string
  message: string
  timestamp: string
}

export interface Update {
  id: string
  message: string
  timestamp: string
}

export interface CreateSelfWorkForm {
  projectId: string
  workType: string
  title: string
  description: string
  estimatedTime: number
  priority: 'low' | 'medium' | 'high'
}
