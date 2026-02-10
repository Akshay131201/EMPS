import { projectTicketsData } from '../../data/projectsData'

const ProjectTicketsTab = () => {
  const blockers = projectTicketsData.filter(ticket => ticket.isBlocker)

  return (
    <div>
      {/* Blockers Alert */}
      {blockers.length > 0 && (
        <div style={{
          background: '#1a1a1a',
          color: '#fff',
          padding: '16px 20px',
          borderRadius: '12px',
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
              ⚠️ {blockers.length} Blocker{blockers.length > 1 ? 's' : ''} Detected
            </div>
            <div style={{ fontSize: '13px', color: '#ccc' }}>
              Critical issues blocking project progress
            </div>
          </div>
          <button
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid #fff',
              background: 'transparent',
              color: '#fff',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#333'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            View Blockers
          </button>
        </div>
      )}

      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>
          All Tickets ({projectTicketsData.length})
        </h3>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            fontWeight: 500,
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
        >
          + Create Ticket
        </button>
      </div>

      {/* Tickets Table */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{
              textAlign: 'left',
              fontSize: '12px',
              color: '#666',
              fontWeight: 500,
              borderBottom: '1px solid #e5e5e5'
            }}>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Ticket</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Type</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Priority</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Status</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Assignee</th>
              <th style={{ padding: '16px 20px', fontWeight: 500, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectTicketsData.map(ticket => (
              <tr
                key={ticket.id}
                style={{
                  borderBottom: '1px solid #f5f5f5',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {ticket.isBlocker && <span style={{ fontSize: '16px' }}>🚫</span>}
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
                      {ticket.title}
                    </span>
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: '#fafafa',
                    color: '#666',
                    border: '1px solid #e5e5e5'
                  }}>
                    {ticket.type}
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: ticket.priority === 'CRITICAL' || ticket.priority === 'HIGH' ? '#1a1a1a' : '#fafafa',
                    color: ticket.priority === 'CRITICAL' || ticket.priority === 'HIGH' ? '#fff' : '#666',
                    border: '1px solid #e5e5e5'
                  }}>
                    {ticket.priority}
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: '#f0f0f0',
                    color: '#1a1a1a',
                    border: '1px solid #e5e5e5'
                  }}>
                    {ticket.status.replace('_', ' ')}
                  </span>
                </td>
                <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
                  {ticket.assignee}
                </td>
                <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                  <button
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      border: '1px solid #e5e5e5',
                      background: '#fff',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#1a1a1a',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                  >
                    Escalate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectTicketsTab
