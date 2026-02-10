import type { Income, Expense, FinanceSummary } from '../types/finance.types'

export const incomeData: Income[] = [
  {
    id: '1',
    invoiceNo: 'INV-2026-001',
    client: 'Acme Corporation',
    project: 'E-Commerce Platform',
    amount: 45000,
    status: 'PAID',
    paymentDate: '2026-02-05',
    dueDate: '2026-02-05',
    createdAt: '2026-01-20'
  },
  {
    id: '2',
    invoiceNo: 'INV-2026-002',
    client: 'TechStart Inc',
    project: 'Mobile App Redesign',
    amount: 32000,
    status: 'PENDING',
    paymentDate: '',
    dueDate: '2026-02-15',
    createdAt: '2026-01-25'
  },
  {
    id: '3',
    invoiceNo: 'INV-2026-003',
    client: 'Global Solutions',
    project: 'API Integration',
    amount: 28000,
    status: 'PAID',
    paymentDate: '2026-02-08',
    dueDate: '2026-02-08',
    createdAt: '2026-01-28'
  },
  {
    id: '4',
    invoiceNo: 'INV-2026-004',
    client: 'Digital Ventures',
    project: 'Dashboard Analytics',
    amount: 38000,
    status: 'OVERDUE',
    paymentDate: '',
    dueDate: '2026-02-01',
    createdAt: '2026-01-15'
  },
  {
    id: '5',
    invoiceNo: 'INV-2026-005',
    client: 'Innovation Labs',
    project: 'Cloud Migration',
    amount: 52000,
    status: 'PENDING',
    paymentDate: '',
    dueDate: '2026-02-20',
    createdAt: '2026-02-01'
  },
  {
    id: '6',
    invoiceNo: 'INV-2026-006',
    client: 'Smart Systems',
    project: 'Security Audit',
    amount: 25000,
    status: 'PAID',
    paymentDate: '2026-02-10',
    dueDate: '2026-02-10',
    createdAt: '2026-02-03'
  }
]

export const expenseData: Expense[] = [
  {
    id: '1',
    category: 'Infrastructure',
    amount: 8500,
    vendor: 'AWS Cloud Services',
    date: '2026-02-01',
    approvalStatus: 'APPROVED',
    description: 'Monthly cloud hosting and services',
    requestedBy: 'David Kumar',
    approvedBy: 'Sarah Johnson'
  },
  {
    id: '2',
    category: 'Software Licenses',
    amount: 3200,
    vendor: 'Microsoft',
    date: '2026-02-03',
    approvalStatus: 'APPROVED',
    description: 'Office 365 and Azure subscriptions',
    requestedBy: 'Emily Rodriguez',
    approvedBy: 'Sarah Johnson'
  },
  {
    id: '3',
    category: 'Marketing',
    amount: 5000,
    vendor: 'Google Ads',
    date: '2026-02-05',
    approvalStatus: 'PENDING',
    description: 'Q1 advertising campaign',
    requestedBy: 'Lisa Anderson',
    billUrl: '/bills/google-ads-feb.pdf'
  },
  {
    id: '4',
    category: 'Office Supplies',
    amount: 1200,
    vendor: 'Office Depot',
    date: '2026-02-07',
    approvalStatus: 'APPROVED',
    description: 'Monthly office supplies and equipment',
    requestedBy: 'Jennifer Lee',
    approvedBy: 'Sarah Johnson'
  },
  {
    id: '5',
    category: 'Training',
    amount: 4500,
    vendor: 'Udemy Business',
    date: '2026-02-08',
    approvalStatus: 'PENDING',
    description: 'Team training and development courses',
    requestedBy: 'Michael Chen',
    billUrl: '/bills/udemy-invoice.pdf'
  },
  {
    id: '6',
    category: 'Travel',
    amount: 2800,
    vendor: 'Delta Airlines',
    date: '2026-02-09',
    approvalStatus: 'REJECTED',
    description: 'Client meeting travel expenses',
    requestedBy: 'Robert Taylor',
    approvedBy: 'Sarah Johnson'
  },
  {
    id: '7',
    category: 'Equipment',
    amount: 6500,
    vendor: 'Apple Store',
    date: '2026-02-10',
    approvalStatus: 'PENDING',
    description: 'MacBook Pro for new developer',
    requestedBy: 'Sarah Johnson',
    billUrl: '/bills/apple-invoice.pdf'
  }
]

export const financeSummary: FinanceSummary = {
  monthlyIncome: 220000,
  monthlyExpense: 98500,
  pendingPayments: 122000,
  profitMargin: 55.2,
  totalRevenue: 220000,
  totalExpenses: 98500,
  netProfit: 121500
}
