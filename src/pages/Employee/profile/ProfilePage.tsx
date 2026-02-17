import ProfilePhotoSection from './components/ProfilePhotoSection'
import PersonalDetailsSection from './components/PersonalDetailsSection'
import RoleAndTeamSection from './components/RoleAndTeamSection'
import PasswordChangeSection from './components/PasswordChangeSection'
import { employeeProfile } from './data/profileData'

const ProfilePage = () => {
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
          My Profile
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0,
        }}>
          Manage your personal information and account settings
        </p>
      </div>

      {/* Profile Photo Section */}
      <div style={{ marginBottom: '24px' }}>
        <ProfilePhotoSection
          currentPhoto={employeeProfile.profilePhoto}
          userName={employeeProfile.personalDetails.fullName}
        />
      </div>

      {/* Personal Details Section */}
      <div style={{ marginBottom: '24px' }}>
        <PersonalDetailsSection details={employeeProfile.personalDetails} />
      </div>

      {/* Role & Team Section */}
      <div style={{ marginBottom: '24px' }}>
        <RoleAndTeamSection roleInfo={employeeProfile.roleAndTeam} />
      </div>

      {/* Password Change Section */}
      <div style={{ marginBottom: '24px' }}>
        <PasswordChangeSection />
      </div>
    </div>
  )
}

export default ProfilePage
