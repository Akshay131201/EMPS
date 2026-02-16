import { useState } from 'react'
import type { ReportType, DateRange } from './types/report.types'
import {
  taskCompletionReport,
  ticketResolutionReport,
  teamProductivityReport,
  attendanceSummaryReport,
  projects,
} from './data/reportsData'
import ReportFilters from './components/ReportFilters'
import TaskCompletionReport from './components/TaskCompletionReport'
import TicketResolutionReport from './components/TicketResolutionReport'
import TeamProductivityReport from './components/TeamProductivityReport'
import AttendanceSummaryReport from './components/AttendanceSummaryReport'

const ReportsPage = () => {
  const [reportType, setReportType] = useState<ReportType>('task-completion')
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: '2026-01-01',
    endDate: '2026-02-16',
  })
  const [selectedProject, setSelectedProject] = useState('All Projects')

  const handleExportPDF = () => {
    alert('Exporting report as PDF...')
    // In a real app, implement PDF export functionality
  }

  const handleExportExcel = () => {
    alert('Exporting report as Excel...')
    // In a real app, implement Excel export functionality
  }

  const renderReport = () => {
    switch (reportType) {
      case 'task-completion':
        return <TaskCompletionReport data={taskCompletionReport} />
      case 'ticket-resolution':
        return <TicketResolutionReport data={ticketResolutionReport} />
      case 'team-productivity':
        return <TeamProductivityReport data={teamProductivityReport} />
      case 'attendance-summary':
        return <AttendanceSummaryReport data={attendanceSummaryReport} />
      default:
        return null
    }
  }

  const getReportTitle = () => {
    switch (reportType) {
      case 'task-completion':
        return 'Task Completion Report'
      case 'ticket-resolution':
        return 'Ticket Resolution Time Report'
      case 'team-productivity':
        return 'Team Productivity Report'
      case 'attendance-summary':
        return 'Attendance Summary Report'
      default:
        return 'Report'
    }
  }

  return (
    <div style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '8px',
        }}>
          Reports
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666666',
        }}>
          Generate and export comprehensive team performance reports
        </p>
      </div>

      {/* Filters */}
      <ReportFilters
        reportType={reportType}
        dateRange={dateRange}
        project={selectedProject}
        projects={projects}
        onReportTypeChange={setReportType}
        onDateRangeChange={setDateRange}
        onProjectChange={setSelectedProject}
        onExportPDF={handleExportPDF}
        onExportExcel={handleExportExcel}
      />

      {/* Report Header */}
      <div style={{
        background: '#ffffff',
        padding: '20px 24px',
        borderRadius: '12px 12px 0 0',
        border: '1px solid #e5e5e5',
        borderBottom: 'none',
        marginBottom: '0',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '4px',
            }}>
              {getReportTitle()}
            </h2>
            <p style={{
              fontSize: '13px',
              color: '#666666',
              margin: 0,
            }}>
              Period: {new Date(dateRange.startDate).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })} - {new Date(dateRange.endDate).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
              {selectedProject !== 'All Projects' && ` • Project: ${selectedProject}`}
            </p>
          </div>
          <div style={{
            padding: '6px 12px',
            background: '#eff6ff',
            color: '#1e40af',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
          }}>
            Generated: {new Date().toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div style={{
        background: '#f9fafb',
        padding: '24px',
        borderRadius: '0 0 12px 12px',
        border: '1px solid #e5e5e5',
      }}>
        {renderReport()}
      </div>
    </div>
  )
}

export default ReportsPage
