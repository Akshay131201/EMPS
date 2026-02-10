import { ticketsData } from '../data/ticketsData'
import TicketRow from './TicketRow'

const TicketTable = () => {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
      }}
    >
      <thead>
        <tr
          style={{
            textAlign: 'left',
            fontSize: '12px',
            color: '#666',
            fontWeight: 500,
            borderBottom: '1px solid #e5e5e5',
          }}
        >
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Ticket ID</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Title</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Project</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Created By</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Assigned To</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Status</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>SLA Time</th>
          <th style={{ padding: '16px 20px', textAlign: 'right', fontWeight: 500 }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {ticketsData.map((ticket) => (
          <TicketRow key={ticket.id} ticket={ticket} />
        ))}
      </tbody>
    </table>
  )
}

export default TicketTable
