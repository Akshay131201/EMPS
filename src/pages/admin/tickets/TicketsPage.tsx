import { useState } from 'react'
import TicketFilters from './components/TicketFilters'
import TicketTable from './components/TicketTable'

const TicketsPage = () => {
  const [filters, setFilters] = useState({})

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters })
    console.log('Filters updated:', { ...filters, ...newFilters })
  }

  return (
    <div style={{ padding: '32px', maxWidth: '1600px', margin: '0 auto' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <div>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            marginBottom: 4,
            color: '#1a1a1a',
            letterSpacing: '-0.01em'
          }}>
            Tickets
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Manage and resolve support tickets
          </p>
        </div>

        <button
          style={{
            padding: '10px 18px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            fontWeight: 500,
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
        >
          + Create Ticket
        </button>
      </div>

      {/* Filters */}
      <TicketFilters onFilterChange={handleFilterChange} />

      {/* Card */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
          overflow: 'hidden',
        }}
      >
        <TicketTable />
      </div>
    </div>
  )
}

export default TicketsPage
