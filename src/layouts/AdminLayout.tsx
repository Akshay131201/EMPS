import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/sidebar/AdminSidebar'
import AdminHeader from '../components/header/AdminHeader'

const AdminLayout = () => {
  return (
    <div className="layout">
      <AdminSidebar />

      <div className="main">
        <AdminHeader />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
