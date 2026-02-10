interface Props {
  onFilterChange: (filters: any) => void
}

const TicketFilters = ({ onFilterChange }: Props) => {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '12px', 
      flexWrap: 'wrap',
      marginBottom: '20px'
    }}>
      <select
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
          background: '#fff',
          fontSize: '14px',
          color: '#1a1a1a',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.15s ease'
        }}
        onChange={(e) => onFilterChange({ project: e.target.value })}
      >
        <option value="">All Projects</option>
        <option value="E-Commerce Platform">E-Commerce Platform</option>
        <option value="Mobile App Redesign">Mobile App Redesign</option>
        <option value="API Integration">API Integration</option>
        <option value="Dashboard Analytics">Dashboard Analytics</option>
      </select>

      <select
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
          background: '#fff',
          fontSize: '14px',
          color: '#1a1a1a',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.15s ease'
        }}
        onChange={(e) => onFilterChange({ priority: e.target.value })}
      >
        <option value="">All Priority</option>
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
        <option value="CRITICAL">Critical</option>
      </select>

      <select
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
          background: '#fff',
          fontSize: '14px',
          color: '#1a1a1a',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.15s ease'
        }}
        onChange={(e) => onFilterChange({ status: e.target.value })}
      >
        <option value="">All Status</option>
        <option value="OPEN">Open</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="PENDING">Pending</option>
        <option value="RESOLVED">Resolved</option>
        <option value="CLOSED">Closed</option>
      </select>

      <select
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
          background: '#fff',
          fontSize: '14px',
          color: '#1a1a1a',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.15s ease'
        }}
        onChange={(e) => onFilterChange({ assignedTo: e.target.value })}
      >
        <option value="">All Employees</option>
        <option value="Emily Rodriguez">Emily Rodriguez</option>
        <option value="David Kumar">David Kumar</option>
        <option value="Michael Chen">Michael Chen</option>
        <option value="Sarah Johnson">Sarah Johnson</option>
        <option value="James Wilson">James Wilson</option>
      </select>

      <button
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
          background: '#fff',
          fontSize: '14px',
          color: '#666',
          cursor: 'pointer',
          fontWeight: 500,
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
        onClick={() => onFilterChange({})}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default TicketFilters
