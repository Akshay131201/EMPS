import SummaryCards from './components/SummaryCards'
import TaskStatusWidget from './components/TaskStatusWidget'
import TicketOverviewWidget from './components/TicketOverviewWidget'
import TeamActivityFeed from './components/TeamActivityFeed'

const TeamLeadDashboard = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    }}>
      {/* Page Title */}
      <div>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '8px',
          letterSpacing: '-0.02em',
        }}>
          Team Lead Dashboard
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666666',
        }}>
          Quick overview of team health and project status
        </p>
      </div>

      {/* Summary Cards */}
      <SummaryCards />

      {/* Main Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px',
      }}>
        {/* Task Status Widget */}
        <TaskStatusWidget />

        {/* Ticket Overview Widget */}
        <TicketOverviewWidget />

        {/* Team Activity Feed */}
        <div style={{ gridColumn: 'span 1' }}>
          <TeamActivityFeed />
        </div>
      </div>
    </div>
  )
}

export default TeamLeadDashboard
