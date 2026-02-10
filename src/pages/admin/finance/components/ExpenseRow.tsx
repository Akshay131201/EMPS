import type { Expense } from '../types/finance.types'
import ApprovalStatus from './ApprovalStatus'

interface Props {
  expense: Expense
}

const ExpenseRow = ({ expense }: Props) => {
  const isPending = expense.approvalStatus === 'PENDING'

  return (
    <tr
      style={{
        borderBottom: '1px solid #f5f5f5',
        transition: 'background 0.15s ease',
        backgroundColor: isPending ? '#fafafa' : 'transparent'
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#fafafa')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = isPending ? '#fafafa' : 'transparent')
      }
    >
      <td style={{ padding: '16px 20px' }}>
        <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
          {expense.category}
        </div>
        <div style={{ fontSize: '12px', color: '#999', marginTop: '2px' }}>
          {expense.description}
        </div>
      </td>

      <td style={{ padding: '16px 20px' }}>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>
          ${expense.amount.toLocaleString()}
        </div>
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {expense.vendor}
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {expense.date}
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {expense.requestedBy}
      </td>

      <td style={{ padding: '16px 20px' }}>
        <ApprovalStatus status={expense.approvalStatus} />
      </td>

      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
        {expense.approvalStatus === 'PENDING' ? (
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button
              style={{
                border: 'none',
                background: '#1a1a1a',
                cursor: 'pointer',
                fontSize: '13px',
                padding: '6px 12px',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 500,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
            >
              Approve
            </button>
            <button
              style={{
                border: '1px solid #e5e5e5',
                background: '#fff',
                cursor: 'pointer',
                fontSize: '13px',
                padding: '6px 12px',
                borderRadius: '8px',
                color: '#666',
                fontWeight: 500,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fafafa'
                e.currentTarget.style.color = '#1a1a1a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fff'
                e.currentTarget.style.color = '#666'
              }}
            >
              Reject
            </button>
          </div>
        ) : (
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
            View Bill
          </button>
        )}
      </td>
    </tr>
  )
}

export default ExpenseRow
