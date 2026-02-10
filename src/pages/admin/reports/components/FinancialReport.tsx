import { financialReportData } from '../data/reportsData'

const FinancialReport = () => {
  const latestMonth = financialReportData[financialReportData.length - 1]

  return (
    <div>
      {/* Current Month Highlight */}
      <div style={{
        background: '#1a1a1a',
        borderRadius: '12px',
        padding: '32px',
        marginBottom: '24px',
        color: '#fff'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>
          {latestMonth.month} Financial Summary
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
              Total Revenue
            </div>
            <div style={{ fontSize: '32px', fontWeight: 600 }}>
              ${(latestMonth.revenue / 1000).toFixed(0)}K
            </div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
              Total Expenses
            </div>
            <div style={{ fontSize: '32px', fontWeight: 600 }}>
              ${(latestMonth.expenses / 1000).toFixed(0)}K
            </div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
              Net Profit
            </div>
            <div style={{ fontSize: '32px', fontWeight: 600 }}>
              ${(latestMonth.profit / 1000).toFixed(0)}K
            </div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
              Profit Margin
            </div>
            <div style={{ fontSize: '32px', fontWeight: 600 }}>
              {latestMonth.profitMargin}%
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Comparison Table */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #e5e5e5' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
            Monthly Comparison
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
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Month</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Revenue</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Expenses</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Profit</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Margin</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Invoices</th>
            </tr>
          </thead>
          <tbody>
            {financialReportData.map((month, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: '1px solid #f5f5f5',
                  transition: 'background 0.15s ease',
                  backgroundColor: index === financialReportData.length - 1 ? '#fafafa' : 'transparent'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index === financialReportData.length - 1 ? '#fafafa' : 'transparent'}
              >
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
                    {month.month}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>
                    ${month.revenue.toLocaleString()}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#666' }}>
                    ${month.expenses.toLocaleString()}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>
                    ${month.profit.toLocaleString()}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    backgroundColor: month.profitMargin >= 55 ? '#1a1a1a' : '#f0f0f0',
                    color: month.profitMargin >= 55 ? '#fff' : '#1a1a1a',
                    border: '1px solid #e5e5e5'
                  }}>
                    {month.profitMargin}%
                  </span>
                </td>
                <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
                  {month.invoicesPaid} paid / {month.invoicesPending} pending
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FinancialReport
