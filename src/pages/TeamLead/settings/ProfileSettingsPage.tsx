import { useState } from 'react'
import { userProfile as initialProfile, notificationPreferences as initialPreferences } from './data/settingsData'
import ProfileSection from './components/ProfileSection'
import PasswordSection from './components/PasswordSection'
import NotificationSection from './components/NotificationSection'
import type { UserProfile, NotificationPreferences, PasswordChange } from './types/settings.types'

const ProfileSettingsPage = () => {
  const [profile, setProfile] = useState<UserProfile>(initialProfile)
  const [preferences, setPreferences] = useState<NotificationPreferences>(initialPreferences)

  const handleProfileUpdate = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile)
    alert('Profile updated successfully!')
  }

  const handlePasswordChange = (passwords: PasswordChange) => {
    // In a real app, this would call an API
    alert('Password changed successfully!')
  }

  const handlePreferencesUpdate = (updatedPreferences: NotificationPreferences) => {
    setPreferences(updatedPreferences)
    // Auto-save notification
    const notification = document.createElement('div')
    notification.textContent = 'Preferences saved ✓'
    notification.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      padding: 12px 20px;
      background: #10b981;
      color: white;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `
    document.body.appendChild(notification)
    setTimeout(() => {
      notification.remove()
    }, 2000)
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
          Profile & Settings
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666666',
        }}>
          Manage your account settings and preferences
        </p>
      </div>

      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '1200px',
      }}>
        {/* Profile Section */}
        <ProfileSection
          profile={profile}
          onUpdate={handleProfileUpdate}
        />

        {/* Password Section */}
        <PasswordSection
          onPasswordChange={handlePasswordChange}
        />

        {/* Notification Section */}
        <NotificationSection
          preferences={preferences}
          onUpdate={handlePreferencesUpdate}
        />
      </div>
    </div>
  )
}

export default ProfileSettingsPage
