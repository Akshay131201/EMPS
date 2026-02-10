const TicketProblemDescription = () => {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      padding: '24px'
    }}>
      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>
        Problem Description
      </h3>

      <p style={{ 
        fontSize: '14px', 
        color: '#666', 
        lineHeight: '1.6',
        marginBottom: '20px'
      }}>
        The login page breaks on mobile screens below 768px width. Form elements overlap and the submit button 
        is not visible. This issue affects all mobile users trying to access the platform. The problem appears 
        to be related to CSS flexbox layout not adapting properly to smaller screen sizes.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '16px',
        paddingTop: '16px',
        borderTop: '1px solid #f5f5f5'
      }}>
        <div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
            Created By
          </div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
            John Smith
          </div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
            Assigned To
          </div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
            Michael Chen
          </div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
            Created At
          </div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
            2026-02-10 09:30 AM
          </div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
            Type
          </div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
            Bug
          </div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
            Affected Users
          </div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
            ~2,500 mobile users
          </div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
            Environment
          </div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
            Production
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketProblemDescription
