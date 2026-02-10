import { financeData } from '../data/dashboardData'

const FinanceWidget = () => {
  return (
    <div className="card">
      <h3 className="card-title">Finance Snapshot</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ 
          padding: '16px', 
          background: '#fafafa', 
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>Monthly Income</div>
          <div style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a' }}>{financeData.income}</div>
        </div>

        <div style={{ 
          padding: '16px', 
          background: '#fafafa', 
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>Monthly Expense</div>
          <div style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a' }}>{financeData.expense}</div>
        </div>

        <div style={{ 
          padding: '16px', 
          background: '#1a1a1a', 
          borderRadius: '8px',
          marginTop: '4px'
        }}>
          <div style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>Net Profit</div>
          <div style={{ fontSize: '26px', fontWeight: '600', color: '#ffffff' }}>{financeData.profit}</div>
        </div>
      </div>
    </div>
  )
}

export default FinanceWidget
