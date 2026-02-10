import type { ProjectPerformance, EmployeeProductivity, AttendanceSummary, FinancialReport, ProfitLoss } from '../types/report.types'

export const projectPerformanceData: ProjectPerformance[] = [
  {
    projectName: 'E-Commerce Platform',
    status: 'Active',
    progress: 67,
    tasksCompleted: 45,
    totalTasks: 67,
    budget: 150000,
    spent: 98000,
    teamSize: 8,
    onTimeDelivery: 85
  },
  {
    projectName: 'Mobile App Redesign',
    status: 'Active',
    progress: 45,
    tasksCompleted: 23,
    totalTasks: 51,
    budget: 80000,
    spent: 42000,
    teamSize: 5,
    onTimeDelivery: 78
  },
  {
    projectName: 'API Integration',
    status: 'On Hold',
    progress: 30,
    tasksCompleted: 12,
    totalTasks: 40,
    budget: 60000,
    spent: 25000,
    teamSize: 3,
    onTimeDelivery: 65
  },
  {
    projectName: 'Dashboard Analytics',
    status: 'Completed',
    progress: 100,
    tasksCompleted: 38,
    totalTasks: 38,
    budget: 95000,
    spent: 92000,
    teamSize: 4,
    onTimeDelivery: 92
  }
]

export const employeeProductivityData: EmployeeProductivity[] = [
  {
    employeeName: 'Sarah Johnson',
    department: 'Engineering',
    tasksCompleted: 42,
    hoursLogged: 162,
    efficiency: 95,
    projectsInvolved: 3,
    avgTaskCompletionTime: 3.8
  },
  {
    employeeName: 'Michael Chen',
    department: 'Engineering',
    tasksCompleted: 38,
    hoursLogged: 171,
    efficiency: 88,
    projectsInvolved: 2,
    avgTaskCompletionTime: 4.5
  },
  {
    employeeName: 'Emily Rodriguez',
    department: 'Design',
    tasksCompleted: 35,
    hoursLogged: 153,
    efficiency: 92,
    projectsInvolved: 4,
    avgTaskCompletionTime: 4.2
  },
  {
    employeeName: 'David Kumar',
    department: 'Engineering',
    tasksCompleted: 45,
    hoursLogged: 180,
    efficiency: 97,
    projectsInvolved: 3,
    avgTaskCompletionTime: 3.5
  },
  {
    employeeName: 'James Wilson',
    department: 'QA',
    tasksCompleted: 52,
    hoursLogged: 144,
    efficiency: 90,
    projectsInvolved: 5,
    avgTaskCompletionTime: 2.8
  }
]

export const attendanceSummaryData: AttendanceSummary[] = [
  {
    month: 'January 2026',
    totalEmployees: 128,
    avgAttendance: 94.5,
    totalPresent: 2420,
    totalAbsent: 85,
    totalLate: 142,
    totalLeave: 95
  },
  {
    month: 'February 2026',
    totalEmployees: 128,
    avgAttendance: 92.8,
    totalPresent: 2380,
    totalAbsent: 102,
    totalLate: 158,
    totalLeave: 112
  }
]

export const financialReportData: FinancialReport[] = [
  {
    month: 'December 2025',
    revenue: 195000,
    expenses: 89000,
    profit: 106000,
    profitMargin: 54.4,
    invoicesPaid: 8,
    invoicesPending: 2
  },
  {
    month: 'January 2026',
    revenue: 210000,
    expenses: 92000,
    profit: 118000,
    profitMargin: 56.2,
    invoicesPaid: 9,
    invoicesPending: 1
  },
  {
    month: 'February 2026',
    revenue: 220000,
    expenses: 98500,
    profit: 121500,
    profitMargin: 55.2,
    invoicesPaid: 6,
    invoicesPending: 3
  }
]

export const profitLossData: ProfitLoss[] = [
  {
    category: 'Project Revenue',
    income: 220000,
    expense: 0,
    profit: 220000,
    percentage: 100
  },
  {
    category: 'Infrastructure',
    income: 0,
    expense: 28500,
    profit: -28500,
    percentage: 28.9
  },
  {
    category: 'Salaries',
    income: 0,
    expense: 45000,
    profit: -45000,
    percentage: 45.7
  },
  {
    category: 'Software & Tools',
    income: 0,
    expense: 12000,
    profit: -12000,
    percentage: 12.2
  },
  {
    category: 'Marketing',
    income: 0,
    expense: 8000,
    profit: -8000,
    percentage: 8.1
  },
  {
    category: 'Other Expenses',
    income: 0,
    expense: 5000,
    profit: -5000,
    percentage: 5.1
  }
]
