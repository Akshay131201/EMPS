import { useState, useEffect } from 'react'
import NotificationStats from './components/NotificationStats'
import NotificationList from './components/NotificationList'
import MobileNotificationView from './components/MobileNotificationView'
import { employeeNotifications } from './data/notificationsData'

const NotificationsPage = () => {
  const [filter, setFilter] = useState('all')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMarkAsRead = (id: string) => {
    console.log('Mark as read:', id)
  }

  const handleMarkAllAsRead = () => {
    console.log('Mark all as read')
  }

  const handleOpenRelated = (notification: any) => {
    console.log('Open related page:', notification)
  }

  const filteredNotifications = filter === 'all'
    ? employeeNotifications
    : filter === 'unread'
    ? employeeNotifications.filter(n => !n.isRead)
    : employeeNotifications.filter(n => n.type === filter)

  const unreadCount = employeeNotifications.filter(n => !n.isRead).length

  // Mobile view
  if (isMobile) {
    return <MobileNotificationView notifications={employeeNotifications} onMarkAsRead={handleMarkAsRead} />
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px',
      }}>
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '8px',
          }}>
            Notifications
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0,
          }}>
            Stay updated with your work activities
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllAsRead}
            style={{
              padding: '10px 20px',
              background: '#ffffff',
              color: '#1e40af',
              border: '1px solid #1e40af',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1e40af'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#1e40af'
            }}
          >
            Mark All as Read
          </button>
        )}
      </div>

      {/* Stats */}
      <NotificationStats notifications={employeeNotifications} />

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '24px',
        flexWrap: 'wrap',
      }}>
        {[
          { value: 'all', label: 'All', icon: '📋' },
          { value: 'unread', label: 'Unread', icon: '🔔' },
          { value: 'task', label: 'Tasks', icon: '✓' },
          { value: 'ticket', label: 'Tickets', icon: '🎫' },
          { value: 'approval', label: 'Approvals', icon: '✅' },
        ].map(tab => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            style={{
              padding: '10px 20px',
              background: filter === tab.value ? '#1e40af' : '#ffffff',
              color: filter === tab.value ? '#ffffff' : '#6b7280',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              if (filter !== tab.value) {
                e.currentTarget.style.background = '#f9fafb'
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== tab.value) {
                e.currentTarget.style.background = '#ffffff'
              }
            }}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <NotificationList
        notifications={filteredNotifications}
        onMarkAsRead={handleMarkAsRead}
        onOpenRelated={handleOpenRelated}
      />
    </div>
  )
}

export default NotificationsPage
