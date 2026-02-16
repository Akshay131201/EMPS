type MonthlyTrendChartProps = {
  monthlyData: {
    month: string
    income: number
    expense: number
  }[]
}

const MonthlyTrendChart = ({ monthlyData }: MonthlyTrendChartProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const maxValue = Math.max(
    ...monthlyData.map(d => Math.max(d.income, d.expense))
  )

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      padding: '24px',
      marginBottom: '24px',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '4px',
        }}>
          Monthly Trend
        </h2>
        <p style={{
          fontSize: '13px',
          color: '#666666',
          margin: 0,
        }}>
          Income vs Expense over time
        </p>
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex',
        gap: '24px',
        marginBottom: '24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '4px',
            background: '#10b981',
          }} />
          <span style={{ fontSize: '14px', color: '#666666' }}>Income</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '4px',
            background: '#ef4444',
          }} />
          <span style={{ fontSize: '14px', color: '#666666' }}>Expense</span>
        </div>
      </div>

      {/* Chart */}
      <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-end',
        height: '250px',
        padding: '0 8px',
      }}>
        {monthlyData.map((data, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {/* Bars */}
            <div style={{
              width: '100%',
              display: 'flex',
              gap: '4px',
              alignItems: 'flex-end',
              height: '200px',
            }}>
              {/* Income Bar */}
              <div
                style={{
                  flex: 1,
                  background: '#10b981',
                  borderRadius: '6px 6px 0 0',
                  height: `${(data.income / maxValue) * 100}%`,
                  minHeight: '20px',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                title={`Income: ${formatCurrency(data.income)}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#059669'
                  e.currentTarget.style.transform = 'scaleY(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#10b981'
                  e.currentTarget.style.transform = 'scaleY(1)'
                }}
              />
              
              {/* Expense Bar */}
              <div
                style={{
                  flex: 1,
                  background: '#ef4444',
                  borderRadius: '6px 6px 0 0',
                  height: `${(data.expense / maxValue) * 100}%`,
                  minHeight: '20px',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                title={`Expense: ${formatCurrency(data.expense)}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#dc2626'
                  e.currentTarget.style.transform = 'scaleY(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ef4444'
                  e.currentTarget.style.transform = 'scaleY(1)'
                }}
              />
            </div>

            {/* Month Label */}
            <div style={{
              fontSize: '12px',
              color: '#666666',
              fontWeight: 500,
              textAlign: 'center',
            }}>
              {data.month}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonthlyTrendChart
