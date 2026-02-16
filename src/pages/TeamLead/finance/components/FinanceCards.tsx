type FinanceCardsProps = {
  totalIncome: number
  totalExpense: number
  profitMargin: number
  profitAmount: number
}

const FinanceCards = ({
  totalIncome,
  totalExpense,
  profitMargin,
  profitAmount,
}: FinanceCardsProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const cards = [
    {
      label: 'Total Income',
      value: formatCurrency(totalIncome),
      icon: '💰',
      color: '#10b981',
      bgColor: '#d1fae5',
      trend: '+12%',
      trendPositive: true,
    },
    {
      label: 'Total Expense',
      value: formatCurrency(totalExpense),
      icon: '💸',
      color: '#ef4444',
      bgColor: '#fee2e2',
      trend: '+8%',
      trendPositive: false,
    },
    {
      label: 'Profit Amount',
      value: formatCurrency(profitAmount),
      icon: '📈',
      color: '#3b82f6',
      bgColor: '#dbeafe',
      trend: '+18%',
      trendPositive: true,
    },
    {
      label: 'Profit Margin',
      value: `${profitMargin.toFixed(1)}%`,
      icon: '📊',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      trend: '+5%',
      trendPositive: true,
    },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '20px',
      marginBottom: '24px',
    }}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: '#ffffff',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e5e5e5',
            transition: 'all 0.3s ease',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: card.bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}>
              {card.icon}
            </div>
            <div style={{
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 600,
              background: card.trendPositive ? '#d1fae5' : '#fee2e2',
              color: card.trendPositive ? '#065f46' : '#991b1b',
            }}>
              {card.trend}
            </div>
          </div>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: card.color,
            marginBottom: '6px',
          }}>
            {card.value}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#666666',
            fontWeight: 500,
          }}>
            {card.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FinanceCards
