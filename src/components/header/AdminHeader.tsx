const AdminHeader = () => {
  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search..."
        className="header-search"
      />

      <div className="header-actions">
        🔔
        <div className="profile">Admin</div>
      </div>
    </header>
  )
}

export default AdminHeader
