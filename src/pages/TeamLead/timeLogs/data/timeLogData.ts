import type { TimeLog } from '../types/timeLog.types'

export const teamMembers = [
  { id: 'EMP-001', name: 'Sarah Johnson' },
  { id: 'EMP-002', name: 'Mike Chen' },
  { id: 'EMP-003', name: 'Emily Davis' },
  { id: 'EMP-004', name: 'John Smith' },
  { id: 'EMP-005', name: 'Alex Kumar' },
  { id: 'EMP-006', name: 'Lisa Wang' },
]

export const projects = [
  'E-Commerce Platform',
  'Mobile App Development',
  'Analytics Dashboard',
  'Marketing Website',
  'CRM System',
]

export const tasks = [
  'Frontend Development',
  'Backend API Integration',
  'Database Optimization',
  'UI/UX Design',
  'Code Review',
  'Bug Fixing',
  'Testing & QA',
  'Documentation',
  'Performance Optimization',
  'Security Implementation',
]

// Generate time log data for the current week
export const generateTimeLogData = (): TimeLog[] => {
  const logs: TimeLog[] = []
  const today = new Date()
  
  // Generate logs for the past 7 days
  for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
    const date = new Date(today)
    date.setDate(date.getDate() - dayOffset)
    const dateString = date.toISOString().split('T')[0]
    
    // Each team member logs 1-3 entries per day
    teamMembers.forEach((member, memberIndex) => {
      const entriesCount = (dayOffset + memberIndex) % 3 + 1
      
      for (let entry = 0; entry < entriesCount; entry++) {
        const taskIndex = (dayOffset + memberIndex + entry) % tasks.length
        const projectIndex = (dayOffset + memberIndex) % projects.length
        const hours = [2, 3, 4, 5, 6, 8][(dayOffset + entry) % 6]
        
        // Determine status
        let status: TimeLog['status'] = 'pending'
        if (dayOffset > 3) {
          const statusRandom = (dayOffset + memberIndex + entry) % 5
          if (statusRandom === 0) status = 'rejected'
          else if (statusRandom < 3) status = 'approved'
        }
        
        logs.push({
          id: `TL-${dateString}-${member.id}-${entry}`,
          employeeId: member.id,
          employeeName: member.name,
          taskId: `TSK-${taskIndex + 1}`,
          taskName: tasks[taskIndex],
          projectName: projects[projectIndex],
          loggedHours: hours,
          date: dateString,
          description: `Worked on ${tasks[taskIndex].toLowerCase()} for ${projects[projectIndex]}`,
          status,
          submittedAt: `${dateString}T18:00:00Z`,
          reviewedAt: status !== 'pending' ? `${dateString}T20:00:00Z` : undefined,
          reviewedBy: status !== 'pending' ? 'Team Lead' : undefined,
          rejectionReason: status === 'rejected' ? 'Hours seem excessive for this task. Please provide more details.' : undefined,
        })
      }
    })
  }
  
  return logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const timeLogData = generateTimeLogData()
