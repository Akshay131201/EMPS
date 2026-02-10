import type { PaymentStatus as PaymentStatusType } from '../types/finance.types'

interface Props {
  status: PaymentStatusType
}

const statusConfig = {
  PAID: { bg: '#1a1a1a', color: '#fff', label: 'Paid', icon: '✓' },
  PENDING: { bg: '#fafafa', color: '#666', label: 'Pending', icon: '⏳' },
  OVERDUE: { bg: '#fafafa', color: '#666', label: 'Overdue', icon: '⚠️' },
  CANCELLED: { bg: '#fafafa', color: '#999', label: 'Cancelled', icon: '✕' }
}

const PaymentStatus = ({ status }: Props) => {
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
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px'
      }}
    >
      <span>{config.icon}</span>
      {config.label}
    </span>
  )
}

export default PaymentStatus
