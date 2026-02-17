export const employeeTimeLogs = [
  {
    id: 'TL001',
    date: '2026-02-17',
    workType: 'task',
    reference: 'T001 - Implement User Authentication',
    workDescription: 'Worked on JWT token implementation and password hashing',
    hours: 6,
    approvalStatus: 'approved',
    projectName: 'E-Commerce Platform',
  },
  {
    id: 'TL002',
    date: '2026-02-17',
    workType: 'ticket',
    reference: 'TKT001 - Login page not responsive',
    workDescription: 'Fixed responsive design issues on mobile devices',
    hours: 3,
    approvalStatus: 'pending',
    projectName: 'E-Commerce Platform',
  },
  {
    id: 'TL003',
    date: '2026-02-16',
    workType: 'task',
    reference: 'T003 - Design Dashboard UI',
    workDescription: 'Created dashboard layout and components',
    hours: 7,
    approvalStatus: 'approved',
    projectName: 'CRM System',
  },
  {
    id: 'TL004',
    date: '2026-02-16',
    workType: 'meeting',
    reference: 'Sprint Planning Meeting',
    workDescription: 'Attended sprint planning and task estimation',
    hours: 2,
    approvalStatus: 'approved',
    projectName: 'E-Commerce Platform',
  },
  {
    id: 'TL005',
    date: '2026-02-15',
    workType: 'task',
    reference: 'T004 - Write API Documentation',
    workDescription: 'Documented REST API endpoints with examples',
    hours: 5,
    approvalStatus: 'approved',
    projectName: 'Mobile App Backend',
  },
  {
    id: 'TL006',
    date: '2026-02-15',
    workType: 'other',
    reference: 'Code Review',
    workDescription: 'Reviewed pull requests from team members',
    hours: 2,
    approvalStatus: 'approved',
    projectName: 'E-Commerce Platform',
  },
  {
    id: 'TL007',
    date: '2026-02-14',
    workType: 'task',
    reference: 'T002 - Fix Payment Gateway Bug',
    workDescription: 'Debugged and fixed payment processing timeout issue',
    hours: 8,
    approvalStatus: 'rejected',
    projectName: 'E-Commerce Platform',
  },
]

export const getTimeSummary = () => {
  const today = new Date('2026-02-17')
  const weekStart = new Date(today)
  weekStart.setDate(today.getDate() - today.getDay())
  
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)

  const todayTotal = employeeTimeLogs
    .filter(log => log.date === '2026-02-17')
    .reduce((sum, log) => sum + log.hours, 0)

  const weeklyTotal = employeeTimeLogs
    .filter(log => {
      const logDate = new Date(log.date)
      return logDate >= weekStart && logDate <= today
    })
    .reduce((sum, log) => sum + log.hours, 0)

  const monthlyTotal = employeeTimeLogs
    .filter(log => {
      const logDate = new Date(log.date)
      return logDate >= monthStart && logDate <= today
    })
    .reduce((sum, log) => sum + log.hours, 0)

  return {
    todayTotal,
    weeklyTotal,
    monthlyTotal,
  }
}
