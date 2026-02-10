import { useState } from 'react'
import type { AttendanceStatus } from '../types/attendance.types'

const AttendanceCalendar = () => {
  const [selectedMonth] = useState('February 2026')
  
  // Generate calendar days for February 2026
  const daysInMonth = 28
  const firstDayOfWeek = 6 // Saturday (0 = Sunday)
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  
  // Sample attendance data for calendar
  const attendanceMap: Record<number, AttendanceStatus> = {
    1: 'PRESENT', 2: 'PRESENT', 3: 'LATE', 4: 'PRESENT', 5: 'PRESENT',
    6: 'PRESENT', 7: 'PRESENT', 8: 'ABSENT', 9: 'PRESENT', 10: 'PRESENT',
    11: 'PRESENT', 12: 'LATE', 13: 'PRESENT', 14: 'LEAVE', 15: 'PRESENT',
    16: 'PRESENT', 17: 'PRESENT', 18: 'PRESENT', 19: 'PRESENT', 20: 'HALF_DAY'
  }

  const getStatusColor = (status: AttendanceStatus | null) => {
    if (!status) return '#fff'
    const colors = {
      PRESENT: '#1a1a1a',
      ABSENT: '#fff',
      LATE: '#f0f0f0',
      HALF_DAY: '#f0f0f0',
      LEAVE: '#fafafa',
      WORK_FROM_HOME: '#f0f0f0'
    }
    return colors[status]
  }

  const getStatusTextColor = (status: AttendanceStatus | null) => {
    if (!status) return '#1a1a1a'
    return status === 'PRESENT' ? '#fff' : '#1a1a1a'
  }

  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      padding: '24px'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
          {selectedMonth}
        </h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              background: '#fff',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
          >
            ←
          </button>
          <button
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              background: '#fff',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
          >
            →
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
        {/* Week day headers */}
        {weekDays.map(day => (
          <div
            key={day}
            style={{
              padding: '12px',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 600,
              color: '#666'
            }}
          >
            {day}
          </div>
        ))}

        {/* Empty cells for days before month starts */}
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} style={{ padding: '12px' }} />
        ))}

        {/* Calendar days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const status = attendanceMap[day] || null
          const isToday = day === 10
          
          return (
            <div
              key={day}
              style={{
                padding: '12px',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: getStatusColor(status),
                color: getStatusTextColor(status),
                border: isToday ? '2px solid #1a1a1a' : '1px solid #e5e5e5',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                if (status !== 'PRESENT') {
                  e.currentTarget.style.backgroundColor = '#f5f5f5'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = getStatusColor(status)
              }}
            >
              {day}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div style={{ 
        display: 'flex', 
        gap: '16px', 
        marginTop: '24px',
        paddingTop: '20px',
        borderTop: '1px solid #f5f5f5',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#1a1a1a' }} />
          <span style={{ fontSize: '13px', color: '#666' }}>Present</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#f0f0f0', border: '1px solid #e5e5e5' }} />
          <span style={{ fontSize: '13px', color: '#666' }}>Late</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#fff', border: '1px solid #e5e5e5' }} />
          <span style={{ fontSize: '13px', color: '#666' }}>Absent</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#fafafa', border: '1px solid #e5e5e5' }} />
          <span style={{ fontSize: '13px', color: '#666' }}>Leave</span>
        </div>
      </div>
    </div>
  )
}

export default AttendanceCalendar
