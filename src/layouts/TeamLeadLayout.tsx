import { Outlet } from 'react-router-dom'
import TeamLeadSidebar from '../components/sidebar/TeamLeadSidebar'
import TeamLeadHeader from '../components/header/TeamLeadHeader'

const TeamLeadLayout = () => {
  return (
    <div className="layout">
      <TeamLeadSidebar />

      <div className="main">
        <TeamLeadHeader />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default TeamLeadLayout
