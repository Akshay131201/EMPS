import StatsCards from './components/StatsCards'
import MyTasksWidget from './components/MyTasksWidget'
import MyTicketsWidget from './components/MyTicketsWidget'
import TimeSummaryWidget from './components/TimeSummaryWidget'
import { dashboardStats, myTasks, myTickets, timeSummary } from './data/dashboardData'

const EmployeeDashboard = () => {
  return (
    <div style={{
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '8px',
        }}>
          Dashboard
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0,
        }}>
          Welcome back! Here's your daily work overview
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards stats={dashboardStats} />

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '24px',
      }}>
        {/* My Tasks Widget */}
        <div style={{ gridColumn: 'span 1' }}>
          <MyTasksWidget tasks={myTasks} />
        </div>

        {/* My Tickets Widget */}
        <div style={{ gridColumn: 'span 1' }}>
          <MyTicketsWidget tickets={myTickets} />
        </div>

        {/* Time Summary Widget */}
        <div style={{ gridColumn: 'span 1' }}>
          <TimeSummaryWidget timeSummary={timeSummary} />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
