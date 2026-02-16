export type WorkApprovalStatus = 'pending' | 'approved' | 'rejected'

export type WorkApproval = {
  id: string
  employeeName: string
  project: string
  workTitle: string
  submittedDate: string
  estimatedTime: string
  status: WorkApprovalStatus
  description: string
  reason: string
  expectedOutcome: string
  attachment: string
}

export type WorkApprovalFilters = {
  project: string
  status: string
}
