import { expenseData } from '../data/financeData'
import ExpenseRow from './ExpenseRow'

const ExpenseTable = () => {
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
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Category</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Amount</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Vendor</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Date</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Requested By</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Approval Status</th>
          <th style={{ padding: '16px 20px', textAlign: 'right', fontWeight: 500 }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {expenseData.map((expense) => (
          <ExpenseRow key={expense.id} expense={expense} />
        ))}
      </tbody>
    </table>
  )
}

export default ExpenseTable
