export type PaymentStatus = 'PAID' | 'PENDING' | 'OVERDUE' | 'CANCELLED'
export type ApprovalStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

export interface Income {
  id: string
  invoiceNo: string
  client: string
  project: string
  amount: number
  status: PaymentStatus
  paymentDate: string
  dueDate: string
  createdAt: string
}

export interface Expense {
  id: string
  category: string
  amount: number
  vendor: string
  date: string
  approvalStatus: ApprovalStatus
  description: string
  billUrl?: string
  requestedBy: string
  approvedBy?: string
}

export interface FinanceSummary {
  monthlyIncome: number
  monthlyExpense: number
  pendingPayments: number
  profitMargin: number
  totalRevenue: number
  totalExpenses: number
  netProfit: number
}
