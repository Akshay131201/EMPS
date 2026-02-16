export type CostBreakdown = {
  category: string
  amount: number
  percentage: number
  description: string
}

export type ProjectFinance = {
  projectId: string
  projectName: string
  totalIncome: number
  totalExpense: number
  profitMargin: number
  profitAmount: number
  costBreakdown: {
    salaryCost: number
    toolCost: number
    infrastructureCost: number
    otherCosts: number
  }
  monthlyData: {
    month: string
    income: number
    expense: number
  }[]
}

export type FinanceFilters = {
  project: string
  period: string
}
