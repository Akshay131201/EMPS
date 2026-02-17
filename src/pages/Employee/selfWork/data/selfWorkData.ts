import type { SelfWork, SelfWorkDetail, Comment, Update } from '../types/selfWork.types'

export const employeeSelfWork: SelfWork[] = [
  {
    id: 'SW001',
    title: 'Refactor authentication module',
    projectName: 'E-Commerce Platform',
    projectId: 'P001',
    workType: 'Code Improvement',
    status: 'submitted',
    approvalState: 'pending',
    createdDate: '2026-02-15',
    priority: 'medium',
    estimatedTime: 8,
  },
  {
    id: 'SW002',
    title: 'Add unit tests for payment module',
    projectName: 'E-Commerce Platform',
    projectId: 'P001',
    workType: 'Testing',
    status: 'in-progress',
    approvalState: 'approved',
    createdDate: '2026-02-10',
    priority: 'high',
    estimatedTime: 12,
  },
  {
    id: 'SW003',
    title: 'Optimize database queries',
    projectName: 'CRM System',
    projectId: 'P002',
    workType: 'Performance',
    status: 'draft',
    approvalState: 'pending',
    createdDate: '2026-02-17',
    priority: 'low',
    estimatedTime: 6,
  },
  {
    id: 'SW004',
    title: 'Update API documentation',
    projectName: 'Mobile App Backend',
    projectId: 'P003',
    workType: 'Documentation',
    status: 'completed',
    approvalState: 'approved',
    createdDate: '2026-02-08',
    priority: 'medium',
    estimatedTime: 4,
  },
  {
    id: 'SW005',
    title: 'Implement caching layer',
    projectName: 'E-Commerce Platform',
    projectId: 'P001',
    workType: 'Feature',
    status: 'submitted',
    approvalState: 'rejected',
    createdDate: '2026-02-12',
    priority: 'high',
    estimatedTime: 16,
  },
  {
    id: 'SW006',
    title: 'Fix memory leak in search',
    projectName: 'CRM System',
    projectId: 'P002',
    workType: 'Bug Fix',
    status: 'completed',
    approvalState: 'converted-to-task',
    createdDate: '2026-02-05',
    priority: 'high',
    estimatedTime: 10,
  },
]

export const getSelfWorkDetail = (workId: string): SelfWorkDetail | null => {
  const work = employeeSelfWork.find(w => w.id === workId)
  if (!work) return null

  const details: Record<string, Partial<SelfWorkDetail>> = {
    SW001: {
      description: 'The current authentication module has redundant code and can be refactored to improve maintainability. I propose restructuring the module to follow better design patterns and reduce code duplication.',
      leadFeedback: undefined,
      comments: [
        {
          id: 'C001',
          author: 'John Doe',
          message: 'I\'ve identified several areas where we can improve the code structure.',
          timestamp: '2026-02-15 10:00 AM',
        },
      ],
      updates: [
        {
          id: 'U001',
          message: 'Submitted for approval',
          timestamp: '2026-02-15 10:30 AM',
        },
      ],
    },
    SW002: {
      description: 'Adding comprehensive unit tests for the payment module to ensure reliability and catch potential bugs early.',
      leadFeedback: 'Great initiative! Please make sure to cover edge cases and error scenarios.',
      comments: [
        {
          id: 'C001',
          author: 'Sarah Johnson',
          message: 'Approved. This is important for maintaining code quality.',
          timestamp: '2026-02-11 09:00 AM',
        },
        {
          id: 'C002',
          author: 'John Doe',
          message: 'I\'ve completed 60% of the tests. Working on edge cases now.',
          timestamp: '2026-02-16 02:00 PM',
        },
      ],
      updates: [
        {
          id: 'U001',
          message: 'Started working on test cases',
          timestamp: '2026-02-11 10:00 AM',
        },
        {
          id: 'U002',
          message: 'Completed basic test scenarios',
          timestamp: '2026-02-14 03:00 PM',
        },
      ],
    },
    SW005: {
      description: 'Implementing a Redis-based caching layer to improve application performance and reduce database load.',
      leadFeedback: 'We need to discuss the infrastructure requirements first. Please schedule a meeting with the DevOps team.',
      comments: [
        {
          id: 'C001',
          author: 'Sarah Johnson',
          message: 'This needs more planning. Let\'s discuss in the next sprint planning.',
          timestamp: '2026-02-13 11:00 AM',
        },
      ],
      updates: [
        {
          id: 'U001',
          message: 'Submitted proposal',
          timestamp: '2026-02-12 02:00 PM',
        },
      ],
    },
    SW006: {
      description: 'Fixed a memory leak in the search functionality that was causing performance degradation over time.',
      leadFeedback: 'Excellent work! Converting this to a formal task for tracking.',
      comments: [
        {
          id: 'C001',
          author: 'Mike Chen',
          message: 'Great catch! This was affecting production.',
          timestamp: '2026-02-06 10:00 AM',
        },
      ],
      updates: [
        {
          id: 'U001',
          message: 'Identified the issue',
          timestamp: '2026-02-05 11:00 AM',
        },
        {
          id: 'U002',
          message: 'Implemented fix and tested',
          timestamp: '2026-02-06 04:00 PM',
        },
        {
          id: 'U003',
          message: 'Converted to task T-456',
          timestamp: '2026-02-07 09:00 AM',
        },
      ],
      convertedToTaskId: 'T-456',
    },
  }

  return {
    ...work,
    description: details[workId]?.description || 'No description available',
    leadFeedback: details[workId]?.leadFeedback,
    comments: details[workId]?.comments || [],
    updates: details[workId]?.updates || [],
    convertedToTaskId: details[workId]?.convertedToTaskId,
  }
}
