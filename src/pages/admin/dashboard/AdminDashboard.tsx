import StatsCards from './components/StatsCards'
import WorkProgress from './components/WorkProgress'
import AttendanceWidget from './components/AttendanceWidget'
import FinanceWidget from './components/FinanceWidget'
import AlertsPanel from './components/AlertsPanel'

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <StatsCards />

      <div className="dashboard-grid">
        <WorkProgress />
        <AttendanceWidget />
        <FinanceWidget />
        <AlertsPanel />
      </div>
    </div>
  )
}

export default AdminDashboard
