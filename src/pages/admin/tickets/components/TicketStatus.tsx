import type { TicketStatus as TicketStatusType } from '../types/ticket.types'

interface Props {
  status: TicketStatusType
}

const statusConfig = {
  OPEN: { bg: '#fafafa', color: '#666', label: 'Open' },
  IN_PROGRESS: { bg: '#f0f0f0', color: '#1a1a1a', label: 'In Progress' },
  PENDING: { bg: '#fafafa', color: '#666', label: 'Pending' },
  RESOLVED: { bg: '#1a1a1a', color: '#fff', label: 'Resolved' },
  CLOSED: { bg: '#1a1a1a', color: '#fff', label: 'Closed' }
}

const TicketStatus = ({ status }: Props) => {
  const config = statusConfig[status]
  
  return (
    <span
      style={{
        padding: '6px 12px',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 500,
        backgroundColor: config.bg,
        color: config.color,
        border: '1px solid #e5e5e5',
      }}
    >
      {config.label}
    </span>
  )
}

export default TicketStatus
