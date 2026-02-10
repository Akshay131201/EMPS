import type { Income } from '../types/finance.types'
import PaymentStatus from './PaymentStatus'

interface Props {
  income: Income
}

const IncomeRow = ({ income }: Props) => {
  const isOverdue = income.status === 'OVERDUE'

  return (
    <tr
      style={{
        borderBottom: '1px solid #f5f5f5',
        transition: 'background 0.15s ease',
        backgroundColor: isOverdue ? '#fafafa' : 'transparent'
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#fafafa')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = isOverdue ? '#fafafa' : 'transparent')
      }
    >
      <td style={{ padding: '16px 20px' }}>
        <div style={{ 
          fontWeight: 600, 
          color: '#1a1a1a', 
          fontSize: '13px',
          fontFamily: 'monospace'
        }}>
          {income.invoiceNo}
        </div>
      </td>

      <td style={{ padding: '16px 20px' }}>
        <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
          {income.client}
        </div>
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {income.project}
      </td>

      <td style={{ padding: '16px 20px' }}>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>
          ${income.amount.toLocaleString()}
        </div>
      </td>

      <td style={{ padding: '16px 20px' }}>
        <PaymentStatus status={income.status} />
      </td>

      <td style={{ padding: '16px 20px' }}>
        <span style={{ 
          fontSize: '14px', 
          color: income.paymentDate ? '#1a1a1a' : '#ccc',
          fontWeight: income.paymentDate ? 500 : 400
        }}>
          {income.paymentDate || 'Pending'}
        </span>
        {isOverdue && (
          <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
            Due: {income.dueDate}
          </div>
        )}
      </td>

      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            style={{
              border: '1px solid #e5e5e5',
              background: '#fff',
              cursor: 'pointer',
              fontSize: '13px',
              padding: '6px 12px',
              borderRadius: '8px',
              color: '#1a1a1a',
              fontWeight: 500,
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
            Edit
          </button>
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
        </div>
      </td>
    </tr>
  )
}

export default IncomeRow
