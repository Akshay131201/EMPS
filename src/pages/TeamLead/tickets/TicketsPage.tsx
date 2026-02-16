import { useState } from 'react'
import { ticketsData } from './data/ticketsData'
import TicketFilters from './components/TicketFilters'
import TicketsTable from './components/TicketsTable'

const TicketsPage = () => {
  const [projectFilter, setProjectFilter] = useState('all')
  const [assignedToFilter, setAssignedToFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

  const filteredTickets = ticketsData.filter(ticket => {
    const matchesProject = projectFilter === 'all' || ticket.project === projectFilter
    const matchesAssignedTo = assignedToFilter === 'all' || ticket.assignedTo === assignedToFilter
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter
    const matchesType = typeFilter === 'all' || ticket.type === typeFilter
    return matchesProject && matchesAssignedTo && matchesPriority && matchesStatus && matchesType
  })

  const projects = ['all', ...Array.from(new Set(ticketsData.map(t => t.project)))]
  const employees = ['all', ...Array.from(new Set(ticketsData.map(t => t.assignedTo)))]

  const stats = {
    total: ticketsData.length,
    open: ticketsData.filter(t => t.status === 'open').length,
    inProgress: ticketsData.filter(t => t.status === 'in-progress').length,
    resolved: ticketsData.filter(t => t.status === 'resolved').length,
    urgent: ticketsData.filter(t => t.priority === 'urgent').length,
  }

  const handleCreateTicket = () => {
    // TODO: Implement create ticket modal
    console.log('Create ticket')
  }

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '8px',
          letterSpacing: '-0.02em',
        }}>
          Ticket Center
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666666',
        }}>
          Monitor and manage internal collaboration tickets
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
      }}>
        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
            Total Tickets
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
            {stats.total}
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
            Open
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#ef4444' }}>
            {stats.open}
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
            In Progress
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#4a90e2' }}>
            {stats.inProgress}
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
            Resolved
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#10b981' }}>
            {stats.resolved}
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
            🔴 Urgent
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#ef4444' }}>
            {stats.urgent}
          </div>
        </div>
      </div>

      {/* Filters */}
      <TicketFilters
        projectFilter={projectFilter}
        assignedToFilter={assignedToFilter}
        priorityFilter={priorityFilter}
        statusFilter={statusFilter}
        typeFilter={typeFilter}
        projects={projects}
        employees={employees}
        onProjectChange={setProjectFilter}
        onAssignedToChange={setAssignedToFilter}
        onPriorityChange={setPriorityFilter}
        onStatusChange={setStatusFilter}
        onTypeChange={setTypeFilter}
        onCreateTicket={handleCreateTicket}
      />

      {/* Tickets List */}
      <TicketsTable tickets={filteredTickets} />
    </div>
  )
}

export default TicketsPage
