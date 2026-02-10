import TicketProblemDescription from './components/TicketProblemDescription'
import TicketDiscussionThread from './components/TicketDiscussionThread'
import TicketSolutionLogs from './components/TicketSolutionLogs'
import TicketStatusTimeline from './components/TicketStatusTimeline'
import TicketAttachments from './components/TicketAttachments'
import TicketAdminActions from './components/TicketAdminActions'

const TicketDetailPage = () => {
  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: '#666',
              padding: '4px'
            }}
          >
            ←
          </button>
          <span style={{
            fontWeight: 600,
            color: '#666',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
            TKT-1001
          </span>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 600,
            color: '#1a1a1a',
            letterSpacing: '-0.01em'
          }}>
            Login page not responsive on mobile devices
          </h1>
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          alignItems: 'center',
          marginLeft: '44px'
        }}>
          <span style={{
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 500,
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: '1px solid #e5e5e5'
          }}>
            High Priority
          </span>
          <span style={{
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 500,
            backgroundColor: '#f0f0f0',
            color: '#1a1a1a',
            border: '1px solid #e5e5e5'
          }}>
            In Progress
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>
            E-Commerce Platform
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>•</span>
          <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
            SLA: 4h remaining
          </span>
        </div>
      </div>

      {/* Admin Actions Bar */}
      <TicketAdminActions />

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginTop: '24px' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <TicketProblemDescription />
          <TicketDiscussionThread />
          <TicketSolutionLogs />
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <TicketStatusTimeline />
          <TicketAttachments />
        </div>
      </div>
    </div>
  )
}

export default TicketDetailPage
