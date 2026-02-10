export type TicketStatus = 'OPEN' | 'IN_PROGRESS' | 'PENDING' | 'RESOLVED' | 'CLOSED'
export type TicketPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
export type TicketType = 'BUG' | 'FEATURE' | 'SUPPORT' | 'INCIDENT'

export interface Ticket {
  id: string
  title: string
  description: string
  type: TicketType
  project: string
  createdBy: string
  assignedTo: string
  status: TicketStatus
  priority: TicketPriority
  slaTime: string
  createdAt: string
}

export interface TicketDiscussion {
  id: string
  author: string
  role: string
  content: string
  timestamp: string
  isAdminComment?: boolean
}

export interface TicketSolution {
  id: string
  author: string
  solution: string
  timestamp: string
  verified: boolean
}

export interface TicketStatusTimeline {
  id: string
  status: TicketStatus
  changedBy: string
  timestamp: string
  note?: string
}

export interface TicketAttachment {
  id: string
  name: string
  size: string
  type: string
  uploadedBy: string
  uploadedAt: string
}
