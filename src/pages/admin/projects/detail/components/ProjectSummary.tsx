const ProjectSummary = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
      {/* Description Card */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#1a1a1a' }}>
          Description
        </h3>
        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
          Building a modern e-commerce platform with advanced features including real-time inventory management, 
          payment processing, and customer analytics dashboard.
        </p>
      </div>

      {/* Timeline Card */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#1a1a1a' }}>
          Timeline
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Start Date</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>2026-01-15</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Deadline</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>2026-04-15</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Duration</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>3 months</span>
          </div>
        </div>
      </div>

      {/* Status Card */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#1a1a1a' }}>
          Status
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Current Status</span>
            <span style={{
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 500,
              backgroundColor: '#f0f0f0',
              color: '#1a1a1a',
              border: '1px solid #e5e5e5'
            }}>
              Active
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Progress</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>67%</span>
          </div>
          <div style={{ 
            height: '8px', 
            background: '#f0f0f0', 
            borderRadius: '4px',
            overflow: 'hidden',
            marginTop: '4px'
          }}>
            <div style={{ 
              height: '100%', 
              width: '67%', 
              background: '#1a1a1a', 
              borderRadius: '4px' 
            }} />
          </div>
        </div>
      </div>

      {/* Budget Card */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#1a1a1a' }}>
          Budget
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Total Budget</span>
            <span style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>$150,000</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Spent</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>$98,000</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Remaining</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>$52,000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
