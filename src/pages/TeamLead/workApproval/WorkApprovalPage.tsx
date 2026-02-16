import { useState, useMemo } from 'react'
import { workApprovalsData } from './data/workApprovalData'
import StatsCards from './components/StatsCards'
import WorkApprovalFilters from './components/WorkApprovalFilters'
import WorkApprovalTable from './components/WorkApprovalTable'

const WorkApprovalPage = () => {
  const [projectFilter, setProjectFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  // Get unique projects
  const projects = useMemo(() => {
    const uniqueProjects = Array.from(new Set(workApprovalsData.map(w => w.project)))
    return ['all', ...uniqueProjects]
  }, [])

  // Filter approvals
  const filteredApprovals = useMemo(() => {
    return workApprovalsData.filter(approval => {
      const matchesProject = projectFilter === 'all' || approval.project === projectFilter
      const matchesStatus = statusFilter === 'all' || approval.status === statusFilter
      return matchesProject && matchesStatus
    })
  }, [projectFilter, statusFilter])

  // Calculate stats
  const stats = useMemo(() => {
    const pending = workApprovalsData.filter(w => w.status === 'pending').length
    const approved = workApprovalsData.filter(w => w.status === 'approved').length
    const rejected = workApprovalsData.filter(w => w.status === 'rejected').length
    
    return {
      totalPending: pending,
      totalApproved: approved,
      totalRejected: rejected,
      avgProcessingTime: '2.5 days',
    }
  }, [])

  return (
    <div style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '8px',
        }}>
          Self-Work Approval
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666666',
        }}>
          Review and approve employee-submitted personal work
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards
        totalPending={stats.totalPending}
        totalApproved={stats.totalApproved}
        totalRejected={stats.totalRejected}
        avgProcessingTime={stats.avgProcessingTime}
      />

      {/* Filters */}
      <WorkApprovalFilters
        projectFilter={projectFilter}
        statusFilter={statusFilter}
        projects={projects}
        onProjectChange={setProjectFilter}
        onStatusChange={setStatusFilter}
      />

      {/* Table */}
      <WorkApprovalTable approvals={filteredApprovals} />
    </div>
  )
}

export default WorkApprovalPage
