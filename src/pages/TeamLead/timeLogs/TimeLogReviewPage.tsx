import { useState, useMemo } from 'react'
import { timeLogData, teamMembers } from './data/timeLogData'
import TimeLogStats from './components/TimeLogStats'
import TimeLogFilters from './components/TimeLogFilters'
import TimeLogTable from './components/TimeLogTable'

const TimeLogReviewPage = () => {
  const [employeeFilter, setEmployeeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [weekFilter, setWeekFilter] = useState('current')

  // Generate week options
  const weekOptions = useMemo(() => {
    const weeks = [
      { label: 'Current Week', value: 'current' },
      { label: 'Last Week', value: 'last' },
      { label: 'Last 2 Weeks', value: 'last2' },
      { label: 'Last Month', value: 'month' },
    ]
    return weeks
  }, [])

  // Get unique employees
  const employees = useMemo(() => {
    return ['all', ...teamMembers.map(m => m.name)]
  }, [])

  // Filter time logs
  const filteredLogs = useMemo(() => {
    return timeLogData.filter(log => {
      const matchesEmployee = employeeFilter === 'all' || log.employeeName === employeeFilter
      const matchesStatus = statusFilter === 'all' || log.status === statusFilter
      
      // For simplicity, we're showing all data regardless of week filter
      // In a real app, you'd filter by date ranges
      
      return matchesEmployee && matchesStatus
    })
  }, [employeeFilter, statusFilter])

  // Calculate stats
  const stats = useMemo(() => {
    const pending = filteredLogs.filter(l => l.status === 'pending').length
    const approved = filteredLogs.filter(l => l.status === 'approved').length
    const rejected = filteredLogs.filter(l => l.status === 'rejected').length
    const totalHours = filteredLogs.reduce((sum, log) => sum + log.loggedHours, 0)
    
    const uniqueDays = new Set(filteredLogs.map(l => l.date)).size
    const avgHoursPerDay = uniqueDays > 0 
      ? (totalHours / uniqueDays).toFixed(1) + 'h'
      : '0h'

    return {
      totalPending: pending,
      totalApproved: approved,
      totalRejected: rejected,
      totalHours,
      avgHoursPerDay,
    }
  }, [filteredLogs])

  const handleApprove = (id: string) => {
    alert(`Time log ${id} approved!`)
    // In a real app, update the status in your state/backend
  }

  const handleReject = (id: string, reason: string) => {
    alert(`Time log ${id} rejected!\nReason: ${reason}`)
    // In a real app, update the status in your state/backend
  }

  const handleRequestCorrection = (id: string, message: string) => {
    alert(`Correction requested for ${id}!\nMessage: ${message}`)
    // In a real app, send notification to employee
  }

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
          Time Log Review
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666666',
        }}>
          Review and approve team productivity time logs
        </p>
      </div>

      {/* Stats Cards */}
      <TimeLogStats
        totalPending={stats.totalPending}
        totalApproved={stats.totalApproved}
        totalRejected={stats.totalRejected}
        totalHours={stats.totalHours}
        avgHoursPerDay={stats.avgHoursPerDay}
      />

      {/* Filters */}
      <TimeLogFilters
        employeeFilter={employeeFilter}
        statusFilter={statusFilter}
        weekFilter={weekFilter}
        employees={employees}
        weeks={weekOptions}
        onEmployeeChange={setEmployeeFilter}
        onStatusChange={setStatusFilter}
        onWeekChange={setWeekFilter}
      />

      {/* Table */}
      <TimeLogTable
        timeLogs={filteredLogs}
        onApprove={handleApprove}
        onReject={handleReject}
        onRequestCorrection={handleRequestCorrection}
      />
    </div>
  )
}

export default TimeLogReviewPage
