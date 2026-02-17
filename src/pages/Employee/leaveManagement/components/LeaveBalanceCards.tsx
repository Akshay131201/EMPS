interface LeaveBalanceCardsProps {
  balance: {
    sickLeave: { total: number; used: number; remaining: number }
    casualLeave: { total: number; used: number; remaining: number }
    annualLeave: { total: number; used: number; remaining: number }
  }
}

const LeaveBalanceCards = ({ balance }: LeaveBalanceCardsProps) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginBottom: '32px',
    }}>
      {/* Sick Leave */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
            margin: 0,
          }}>
            Sick Leave
          </h3>
          <span style={{
            fontSize: '24px',
          }}>
            🤒
          </span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
          marginBottom: '12px',
        }}>
          <span style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#991b1b',
          }}>
            {balance.sickLeave.remaining}
          </span>
          <span style={{
            fontSize: '14px',
            color: '#6b7280',
          }}>
            / {balance.sickLeave.total} days
          </span>
        </div>
        <div style={{
          fontSize: '12px',
          color: '#6b7280',
        }}>
          Used: {balance.sickLeave.used} days
        </div>
      </div>

      {/* Casual Leave */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
            margin: 0,
          }}>
            Casual Leave
          </h3>
          <span style={{
            fontSize: '24px',
          }}>
            ☕
          </span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
          marginBottom: '12px',
        }}>
          <span style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#b45309',
          }}>
            {balance.casualLeave.remaining}
          </span>
          <span style={{
            fontSize: '14px',
            color: '#6b7280',
          }}>
            / {balance.casualLeave.total} days
          </span>
        </div>
        <div style={{
          fontSize: '12px',
          color: '#6b7280',
        }}>
          Used: {balance.casualLeave.used} days
        </div>
      </div>

      {/* Annual Leave */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
            margin: 0,
          }}>
            Annual Leave
          </h3>
          <span style={{
            fontSize: '24px',
          }}>
            🏖️
          </span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
          marginBottom: '12px',
        }}>
          <span style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#047857',
          }}>
            {balance.annualLeave.remaining}
          </span>
          <span style={{
            fontSize: '14px',
            color: '#6b7280',
          }}>
            / {balance.annualLeave.total} days
          </span>
        </div>
        <div style={{
          fontSize: '12px',
          color: '#6b7280',
        }}>
          Used: {balance.annualLeave.used} days
        </div>
      </div>
    </div>
  )
}

export default LeaveBalanceCards
