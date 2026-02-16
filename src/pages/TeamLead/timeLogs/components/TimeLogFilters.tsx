type TimeLogFiltersProps = {
  employeeFilter: string
  statusFilter: string
  weekFilter: string
  employees: string[]
  weeks: { label: string; value: string }[]
  onEmployeeChange: (value: string) => void
  onStatusChange: (value: string) => void
  onWeekChange: (value: string) => void
}

const TimeLogFilters = ({
  employeeFilter,
  statusFilter,
  weekFilter,
  employees,
  weeks,
  onEmployeeChange,
  onStatusChange,
  onWeekChange,
}: TimeLogFiltersProps) => {
  return (
    <div style={{
      background: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      marginBottom: '24px',
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}>
      {/* Week Filter */}
      <div style={{ flex: '1', minWidth: '200px' }}>
        <label style={{
          display: 'block',
          fontSize: '13px',
          color: '#666666',
          marginBottom: '8px',
          fontWeight: 500,
        }}>
          Week
        </label>
        <select
          value={weekFilter}
          onChange={(e) => onWeekChange(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            color: '#1a1a1a',
            background: '#fafafa',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {weeks.map(week => (
            <option key={week.value} value={week.value}>
              {week.label}
            </option>
          ))}
        </select>
      </div>

      {/* Employee Filter */}
      <div style={{ flex: '1', minWidth: '200px' }}>
        <label style={{
          display: 'block',
          fontSize: '13px',
          color: '#666666',
          marginBottom: '8px',
          fontWeight: 500,
        }}>
          Employee
        </label>
        <select
          value={employeeFilter}
          onChange={(e) => onEmployeeChange(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            color: '#1a1a1a',
            background: '#fafafa',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {employees.map(employee => (
            <option key={employee} value={employee}>
              {employee === 'all' ? 'All Employees' : employee}
            </option>
          ))}
        </select>
      </div>

      {/* Status Filter */}
      <div style={{ flex: '1', minWidth: '200px' }}>
        <label style={{
          display: 'block',
          fontSize: '13px',
          color: '#666666',
          marginBottom: '8px',
          fontWeight: 500,
        }}>
          Status
        </label>
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            color: '#1a1a1a',
            background: '#fafafa',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>
  )
}

export default TimeLogFilters
