import { profitLossData } from '../data/reportsData'

const ProfitLossReport = () => {
  const totalIncome = profitLossData.reduce((sum, item) => sum + item.income, 0)
  const totalExpense = profitLossData.reduce((sum, item) => sum + item.expense, 0)
  const netProfit = totalIncome - totalExpense

  return (
    <div>
      {/* Summary */}
      <div style={{
        background: '#1a1a1a',
        borderRadius: '12px',
        padding: '32px',
        marginBottom: '24px',
        color: '#fff'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>
          Profit & Loss Statement
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
              Total Income
            </div>
            <div style={{ fontSize: '36px', fontWeight: 600 }}>
              ${(totalIncome / 1000).toFixed(0)}K
            </div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
              Total Expenses
            </div>
            <div style={{ fontSize: '36px', fontWeight: 600 }}>
              ${(totalExpense / 1000).toFixed(0)}K
            </div>
          </div>
          <div style={{ 
            padding: '20px', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '8px' 
          }}>
            <div style={{ fontSize: '13px', color: '#ccc', marginBottom: '8px' }}>
              Net Profit
            </div>
            <div style={{ fontSize: '36px', fontWeight: 600 }}>
              ${(netProfit / 1000).toFixed(0)}K
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #e5e5e5' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
            Category Breakdown
          </h3>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{
              textAlign: 'left',
              fontSize: '12px',
              color: '#666',
              fontWeight: 500,
              borderBottom: '1px solid #e5e5e5'
            }}>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Category</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Income</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Expense</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Net</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>% of Total</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Visual</th>
            </tr>
          </thead>
          <tbody>
            {profitLossData.map((item, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: '1px solid #f5f5f5',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
                    {item.category}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: item.income > 0 ? '#1a1a1a' : '#ccc' }}>
                    {item.income > 0 ? `$${item.income.toLocaleString()}` : '-'}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: item.expense > 0 ? '#666' : '#ccc' }}>
                    {item.expense > 0 ? `$${item.expense.toLocaleString()}` : '-'}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ 
                    fontSize: '15px', 
                    fontWeight: 600, 
                    color: item.profit > 0 ? '#1a1a1a' : '#666'
                  }}>
                    {item.profit > 0 ? '+' : ''}{item.profit < 0 ? '-' : ''}${Math.abs(item.profit).toLocaleString()}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#666' }}>
                    {item.percentage}%
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ 
                    height: '6px', 
                    background: '#f0f0f0', 
                    borderRadius: '3px',
                    overflow: 'hidden',
                    width: '100px'
                  }}>
                    <div style={{ 
                      height: '100%', 
                      width: `${item.percentage}%`, 
                      background: item.profit > 0 ? '#1a1a1a' : '#666', 
                      borderRadius: '3px' 
                    }} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProfitLossReport
