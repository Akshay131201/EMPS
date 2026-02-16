import { useState, useMemo } from 'react'
import { attendanceData } from './data/attendanceData'
import AttendanceStats from './components/AttendanceStats'
import AttendanceCalendar from './components/AttendanceCalendar'
import DailyAttendanceTable from './components/DailyAttendanceTable'

const TeamAttendancePage = () => {
  const today = new Date().toISOString().split('T')[0]
  const [selectedDate, setSelectedDate] = useState(today)
  const [viewMode, setViewMode] = useState<'calendar' | 'daily'>('calendar')

  // Get records for selected date
  const dailyRecords = useMemo(() => {
    return attendanceData.filter(record => record.date === selectedDate)
  }, [selectedDate])

  // Calculate overall stats
  const stats = useMemo(() => {
    const present = attendanceData.filter(r => r.status === 'present').length
    const absent = attendanceData.filter(r => r.status === 'absent').length
    const leave = attendanceData.filter(r => r.status === 'leave').length
    const wfh = attendanceData.filter(r => r.status === 'wfh').length
    
    const total = present + absent + leave + wfh
    const attendanceRate = total > 0 
      ? `${Math.round(((present + wfh) / total) * 100)}%`
      : '0%'

    return {
      totalPresent: present,
      totalAbsent: absent,
      totalLeave: leave,
      totalWFH: wfh,
      attendanceRate,
    }
  }, [])

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setViewMode('daily')
  }

  return (
    <div style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ 
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '8px',
          }}>
            Team Attendance
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#666666',
          }}>
            Monitor attendance of your assigned team members
          </p>
        </div>

        {/* View Toggle */}
        <div style={{
          display: 'flex',
          gap: '8px',
          background: '#f5f5f5',
          padding: '4px',
          borderRadius: '8px',
        }}>
          <button
            onClick={() => setViewMode('calendar')}
            style={{
              padding: '10px 20px',
              background: viewMode === 'calendar' ? '#1a1a1a' : 'transparent',
              color: viewMode === 'calendar' ? '#ffffff' : '#666666',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            📅 Calendar View
          </button>
          <button
            onClick={() => setViewMode('daily')}
            style={{
              padding: '10px 20px',
              background: viewMode === 'daily' ? '#1a1a1a' : 'transparent',
              color: viewMode === 'daily' ? '#ffffff' : '#666666',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            📋 Daily View
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <AttendanceStats
        totalPresent={stats.totalPresent}
        totalAbsent={stats.totalAbsent}
        totalLeave={stats.totalLeave}
        totalWFH={stats.totalWFH}
        attendanceRate={stats.attendanceRate}
      />

      {/* Content based on view mode */}
      {viewMode === 'calendar' ? (
        <AttendanceCalendar
          attendanceData={attendanceData}
          onDateSelect={handleDateSelect}
        />
      ) : (
        <DailyAttendanceTable
          records={dailyRecords}
          selectedDate={selectedDate}
        />
      )}
    </div>
  )
}

export default TeamAttendancePage
