export interface Ticket {
  id: string
  title: string
  projectName: string
  projectId: string
  assignedTo: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'open' | 'in-progress' | 'resolved' | 'closed' | 'reopened'
  lastUpdate: string
  createdDate: string
  createdBy: string
  ticketType: string
}

export interface TicketReply {
  id: string
  author: string
  message: string
  timestamp: string
  attachments?: string[]
}

export interface StatusHistory {
  id: string
  status: string
  changedBy: string
  timestamp: string
  comment?: string
}

export interface TicketDetail extends Ticket {
  description: string
  solutionArea: string
  replies: TicketReply[]
  statusHistory: StatusHistory[]
  attachments: string[]
}

export interface CreateTicketForm {
  projectId: string
  ticketType: string
  assignTo: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  title: string
  description: string
  attachments: File[]
}
