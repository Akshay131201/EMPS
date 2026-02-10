import { projectFinanceData } from '../../data/projectsData'

const ProjectFinanceTab = () => {
  const { income, expense, profit } = projectFinanceData

  return (
    <div>
      <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '20px' }}>
        Financial Overview
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {/* Income Card */}
        <div style={{
          background: '#fff',
          border: '1px solid #e5e5e5',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
            Project Income
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>
            ${income.toLocaleString()}
          </div>
          <div style={{ 
            height: '4px', 
            background: '#f0f0f0', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              height: '100%', 
              width: '100%', 
              background: '#1a1a1a', 
              borderRadius: '2px' 
            }} />
          </div>
        </div>

        {/* Expense Card */}
        <div style={{
          background: '#fff',
          border: '1px solid #e5e5e5',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
            Project Expense
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>
            ${expense.toLocaleString()}
          </div>
          <div style={{ 
            height: '4px', 
            background: '#f0f0f0', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              height: '100%', 
              width: `${(expense / income) * 100}%`, 
              background: '#666', 
              borderRadius: '2px' 
            }} />
          </div>
        </div>

        {/* Profit Card */}
        <div style={{
          background: '#1a1a1a',
          border: '1px solid #1a1a1a',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
            Net Profit
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
            ${profit.toLocaleString()}
          </div>
          <div style={{ fontSize: '13px', color: '#ccc' }}>
            {((profit / income) * 100).toFixed(1)}% profit margin
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px',
        marginTop: '20px'
      }}>
        <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '20px' }}>
          Expense Breakdown
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Development Costs</span>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>$65,000</span>
            </div>
            <div style={{ height: '6px', background: '#f0f0f0', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '66%', background: '#1a1a1a', borderRadius: '3px' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Infrastructure</span>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>$18,000</span>
            </div>
            <div style={{ height: '6px', background: '#f0f0f0', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '18%', background: '#1a1a1a', borderRadius: '3px' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Marketing</span>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>$10,000</span>
            </div>
            <div style={{ height: '6px', background: '#f0f0f0', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '10%', background: '#1a1a1a', borderRadius: '3px' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Miscellaneous</span>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>$5,000</span>
            </div>
            <div style={{ height: '6px', background: '#f0f0f0', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '5%', background: '#1a1a1a', borderRadius: '3px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectFinanceTab
