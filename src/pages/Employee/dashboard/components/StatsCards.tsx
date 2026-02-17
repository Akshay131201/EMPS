import type { DashboardStats } from '../types/dashboard.types'

interface StatsCardsProps {
  stats: DashboardStats
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  const getAttendanceColor = (status: string) => {
    switch (status) {
      case 'present': return '#047857'
      case 'absent': return '#991b1b'
      case 'leave': return '#b45309'
      case 'wfh': return '#1e40af'
      default: return '#374151'
    }
  }

  const getAttendanceLabel = (status: string) => {
    switch (status) {
      case 'present': return 'Present'
      case 'absent': return 'Absent'
      case 'leave': return 'On Leave'
      case 'wfh': return 'Work From Home'
      default: return 'Unknown'
    }
  }

  const cards = [
    {
      title: 'Today Tasks',
      value: stats.todayTasks,
      icon: '✓',
      color: '#1e40af',
      bgColor: '#dbeafe',
    },
    {
      title: 'Pending Tickets',
      value: stats.pendingTickets,
      icon: '🎫',
      color: '#b45309',
      bgColor: '#fef3c7',
    },
    {
      title: 'Self Work Pending',
      value: stats.selfWorkPending,
      icon: '📋',
      color: '#6b21a8',
      bgColor: '#ede9fe',
    },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '20px',
      marginBottom: '24px',
    }}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #e5e7eb',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: card.bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}>
              {card.icon}
            </div>
          </div>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: card.color,
            marginBottom: '8px',
          }}>
            {card.value}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            {card.title}
          </div>
        </div>
      ))}

      {/* Attendance Status Card */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: `${getAttendanceColor(stats.attendanceStatus)}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
          }}>
            📅
          </div>
        </div>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          borderRadius: '20px',
          background: getAttendanceColor(stats.attendanceStatus),
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 600,
          marginBottom: '8px',
        }}>
          {getAttendanceLabel(stats.attendanceStatus)}
        </div>
        <div style={{
          fontSize: '14px',
          color: '#6b7280',
          fontWeight: 500,
        }}>
          Attendance Status
        </div>
      </div>
    </div>
  )
}

export default StatsCards
