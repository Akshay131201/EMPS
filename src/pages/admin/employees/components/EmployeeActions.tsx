const EmployeeActions = () => {
  return (
    <button
      style={{
        border: '1px solid #e5e5e5',
        background: '#fff',
        cursor: 'pointer',
        fontSize: '18px',
        padding: '6px 10px',
        borderRadius: '8px',
        color: '#666',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#fafafa'
        e.currentTarget.style.borderColor = '#d4d4d4'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#fff'
        e.currentTarget.style.borderColor = '#e5e5e5'
      }}
    >
      ⋮
    </button>
  )
}

export default EmployeeActions
