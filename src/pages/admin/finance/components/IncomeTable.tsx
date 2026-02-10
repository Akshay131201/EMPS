import { incomeData } from '../data/financeData'
import IncomeRow from './IncomeRow'

const IncomeTable = () => {
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
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Invoice No</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Client</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Project</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Amount</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Status</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Payment Date</th>
          <th style={{ padding: '16px 20px', textAlign: 'right', fontWeight: 500 }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {incomeData.map((income) => (
          <IncomeRow key={income.id} income={income} />
        ))}
      </tbody>
    </table>
  )
}

export default IncomeTable
