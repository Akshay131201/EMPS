import type { ReportType, DateRange } from '../types/report.types'

type ReportFiltersProps = {
  reportType: ReportType
  dateRange: DateRange
  project: string
  projects: string[]
  onReportTypeChange: (type: ReportType) => void
  onDateRangeChange: (range: DateRange) => void
  onProjectChange: (project: string) => void
  onExportPDF: () => void
  onExportExcel: () => void
}

const ReportFilters = ({
  reportType,
  dateRange,
  project,
  projects,
  onReportTypeChange,
  onDateRangeChange,
  onProjectChange,
  onExportPDF,
  onExportExcel,
}: ReportFiltersProps) => {
  const reportTypes = [
    { value: 'task-completion' as ReportType, label: 'Task Completion Report' },
    { value: 'ticket-resolution' as ReportType, label: 'Ticket Resolution Time' },
    { value: 'team-productivity' as ReportType, label: 'Team Productivity' },
    { value: 'attendance-summary' as ReportType, label: 'Attendance Summary' },
  ]

  return (
    <div style={{
      background: '#ffffff',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      marginBottom: '24px',
    }}>
      {/* Report Type Selector */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          fontSize: '14px',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '12px',
        }}>
          Select Report Type
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
        }}>
          {reportTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => onReportTypeChange(type.value)}
              style={{
                padding: '14px 20px',
                background: reportType === type.value ? '#1a1a1a' : '#ffffff',
                color: reportType === type.value ? '#ffffff' : '#666666',
                border: `2px solid ${reportType === type.value ? '#1a1a1a' : '#e5e5e5'}`,
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                if (reportType !== type.value) {
                  e.currentTarget.style.borderColor = '#1a1a1a'
                  e.currentTarget.style.background = '#fafafa'
                }
              }}
              onMouseLeave={(e) => {
                if (reportType !== type.value) {
                  e.currentTarget.style.borderColor = '#e5e5e5'
                  e.currentTarget.style.background = '#ffffff'
                }
              }}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filters Row */}
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
      }}>
        {/* Date Range */}
        <div style={{ flex: '1', minWidth: '200px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: 500,
            color: '#666666',
            marginBottom: '8px',
          }}>
            Start Date
          </label>
          <input
            type="date"
            value={dateRange.startDate}
            onChange={(e) => onDateRangeChange({ ...dateRange, startDate: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              fontSize: '14px',
              color: '#1a1a1a',
              background: '#fafafa',
            }}
          />
        </div>

        <div style={{ flex: '1', minWidth: '200px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: 500,
            color: '#666666',
            marginBottom: '8px',
          }}>
            End Date
          </label>
          <input
            type="date"
            value={dateRange.endDate}
            onChange={(e) => onDateRangeChange({ ...dateRange, endDate: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              fontSize: '14px',
              color: '#1a1a1a',
              background: '#fafafa',
            }}
          />
        </div>

        {/* Project Filter */}
        <div style={{ flex: '1', minWidth: '200px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: 500,
            color: '#666666',
            marginBottom: '8px',
          }}>
            Project
          </label>
          <select
            value={project}
            onChange={(e) => onProjectChange(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              fontSize: '14px',
              color: '#1a1a1a',
              background: '#fafafa',
              cursor: 'pointer',
            }}
          >
            {projects.map((proj) => (
              <option key={proj} value={proj}>
                {proj}
              </option>
            ))}
          </select>
        </div>

        {/* Export Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={onExportPDF}
            style={{
              padding: '10px 20px',
              background: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#dc2626'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#ef4444'}
          >
            <span>📄</span>
            <span>PDF</span>
          </button>
          <button
            onClick={onExportExcel}
            style={{
              padding: '10px 20px',
              background: '#10b981',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#059669'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#10b981'}
          >
            <span>📊</span>
            <span>Excel</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReportFilters
