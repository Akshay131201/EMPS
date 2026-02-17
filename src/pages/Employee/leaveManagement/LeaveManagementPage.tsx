import { useState } from 'react'
import LeaveBalanceCards from './components/LeaveBalanceCards'
import LeaveRequestForm from './components/LeaveRequestForm'
import LeaveStatusList from './components/LeaveStatusList'
import { leaveRequests, leaveBalance } from './data/leaveData'

const LeaveManagementPage = () => {
  const [filter, setFilter] = useState('all')

  const handleSubmitLeave = (data: any) => {
    console.log('Leave request submitted:', data)
  }

  const filteredRequests = filter === 'all' 
    ? leaveRequests 
    : leaveRequests.filter(req => req.status === filter)

  return (
    <div style={{
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Page Header */}
      <div style={{
        marginBottom: '32px',
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '8px',
        }}>
          Leave Management
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0,
        }}>
          Request and manage your leave applications
        </p>
      </div>

      {/* Leave Balance Cards */}
      <LeaveBalanceCards balance={leaveBalance} />

      {/* Leave Request Form */}
      <div style={{ marginBottom: '32px' }}>
        <LeaveRequestForm onSubmit={handleSubmitLeave} />
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '20px',
      }}>
        {[
          { value: 'all', label: 'All Requests' },
          { value: 'pending', label: 'Pending' },
          { value: 'approved', label: 'Approved' },
          { value: 'rejected', label: 'Rejected' },
        ].map(tab => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            style={{
              padding: '10px 20px',
              background: filter === tab.value ? '#1e40af' : '#ffffff',
              color: filter === tab.value ? '#ffffff' : '#6b7280',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (filter !== tab.value) {
                e.currentTarget.style.background = '#f9fafb'
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== tab.value) {
                e.currentTarget.style.background = '#ffffff'
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Leave Status List */}
      <LeaveStatusList requests={filteredRequests} />
    </div>
  )
}

export default LeaveManagementPage
