import { useState } from 'react'
import TimeLogTable from './components/TimeLogTable'
import AddTimeLogModal from './components/AddTimeLogModal'
import { employeeTimeLogs, getTimeSummary } from './data/timeLogsData'

const TimeLogsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const timeSummary = getTimeSummary()

  const handleAddTimeLog = (data: any) => {
    console.log('Adding time log:', data)
  }

  return (
    <div style={{
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Page Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px',
      }}>
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '8px',
          }}>
            Time Log
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0,
          }}>
            Track your daily work hours and productivity
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: '12px 24px',
            background: '#1e40af',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#1e3a8a'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#1e40af'}
        >
          + Add Time Entry
        </button>
      </div>

      {/* Summary Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '32px',
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
            marginBottom: '8px',
          }}>
            Today Total
          </div>
          <div style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#1e40af',
          }}>
            {timeSummary.todayTotal}h
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
            marginBottom: '8px',
          }}>
            Weekly Total
          </div>
          <div style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#047857',
          }}>
            {timeSummary.weeklyTotal}h
          </div>
          <div style={{
            fontSize: '12px',
            color: '#6b7280',
            marginTop: '4px',
          }}>
            Target: 40h
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
            marginBottom: '8px',
          }}>
            Monthly Total
          </div>
          <div style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#b45309',
          }}>
            {timeSummary.monthlyTotal}h
          </div>
          <div style={{
            fontSize: '12px',
            color: '#6b7280',
            marginTop: '4px',
          }}>
            Target: 160h
          </div>
        </div>
      </div>

      {/* Time Log Table */}
      <TimeLogTable logs={employeeTimeLogs} />

      {/* Add Time Log Modal */}
      <AddTimeLogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTimeLog}
      />
    </div>
  )
}

export default TimeLogsPage
