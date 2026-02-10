interface Props {
  onFilterChange: (filters: any) => void
}

const ReportFilters = ({ onFilterChange }: Props) => {
  return (
    <div style={{ 
      background: '#fff',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      padding: '20px 24px',
      marginBottom: '24px',
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginRight: '8px' }}>
        Filters:
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label style={{ fontSize: '13px', color: '#666' }}>From:</label>
        <input
          type="date"
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            outline: 'none',
            cursor: 'pointer'
          }}
          onChange={(e) => onFilterChange({ startDate: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label style={{ fontSize: '13px', color: '#666' }}>To:</label>
        <input
          type="date"
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            outline: 'none',
            cursor: 'pointer'
          }}
          onChange={(e) => onFilterChange({ endDate: e.target.value })}
        />
      </div>

      <select
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
          background: '#fff',
          fontSize: '14px',
          color: '#1a1a1a',
          cursor: 'pointer',
          outline: 'none'
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
          outline: 'none'
        }}
        onChange={(e) => onFilterChange({ department: e.target.value })}
      >
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="Design">Design</option>
        <option value="QA">QA</option>
        <option value="Marketing">Marketing</option>
      </select>

      <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            background: '#fff',
            fontSize: '14px',
            fontWeight: 500,
            color: '#1a1a1a',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
        >
          📄 Export PDF
        </button>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            background: '#1a1a1a',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
        >
          📊 Export Excel
        </button>
      </div>
    </div>
  )
}

export default ReportFilters
