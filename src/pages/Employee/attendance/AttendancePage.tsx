import { useState, useEffect } from 'react'
import CheckInPanel from './components/CheckInPanel'
import AttendanceTable from './components/AttendanceTable'
import MobileAttendanceView from './components/MobileAttendanceView'
import { attendanceRecords, getTodayAttendance } from './data/attendanceData'

const AttendancePage = () => {
  const todayData = getTodayAttendance()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Mobile view
  if (isMobile) {
    return <MobileAttendanceView todayData={todayData} recentRecords={attendanceRecords} />
  }

  // Desktop/Tablet view
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
          Attendance
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0,
        }}>
          Manage your office attendance and track working hours
        </p>
      </div>

      {/* Check-In Panel */}
      <CheckInPanel todayData={todayData} />

      {/* Attendance History */}
      <div style={{
        marginBottom: '16px',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '16px',
        }}>
          Attendance History
        </h2>
      </div>

      <AttendanceTable records={attendanceRecords} />
    </div>
  )
}

export default AttendancePage
