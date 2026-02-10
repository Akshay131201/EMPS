import { teamMembersData } from '../../data/projectsData'

const TeamMembersPanel = () => {
  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>
          Team Members ({teamMembersData.length})
        </h3>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            backgroundColor: '#fff',
            color: '#1a1a1a',
            fontWeight: 500,
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fafafa'
            e.currentTarget.style.borderColor = '#d4d4d4'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#fff'
            e.currentTarget.style.borderColor = '#e5e5e5'
          }}
        >
          + Add Member
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '16px' 
      }}>
        {teamMembersData.map(member => (
          <div
            key={member.id}
            style={{
              background: '#fff',
              border: '1px solid #e5e5e5',
              borderRadius: '12px',
              padding: '20px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#d4d4d4'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e5e5'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '10px',
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                {member.name[0]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
                  {member.name}
                </div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>
                  {member.email}
                </div>
              </div>
            </div>
            
            <div style={{ 
              padding: '8px 12px', 
              background: '#fafafa', 
              borderRadius: '8px',
              fontSize: '13px',
              color: '#666',
              marginBottom: '12px'
            }}>
              {member.role}
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                style={{
                  flex: 1,
                  padding: '8px',
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
                Change Role
              </button>
              <button
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #e5e5e5',
                  background: '#fff',
                  fontSize: '13px',
                  color: '#666',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fafafa'
                  e.currentTarget.style.color = '#1a1a1a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff'
                  e.currentTarget.style.color = '#666'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMembersPanel
