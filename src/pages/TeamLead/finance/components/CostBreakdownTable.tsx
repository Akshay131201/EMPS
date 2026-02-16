type CostBreakdownTableProps = {
  costBreakdown: {
    salaryCost: number
    toolCost: number
    infrastructureCost: number
    otherCosts: number
  }
  totalExpense: number
}

const CostBreakdownTable = ({ costBreakdown, totalExpense }: CostBreakdownTableProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const calculatePercentage = (amount: number) => {
    return ((amount / totalExpense) * 100).toFixed(1)
  }

  const costs = [
    {
      category: 'Salary Cost',
      amount: costBreakdown.salaryCost,
      icon: '👥',
      color: '#3b82f6',
      description: 'Team member salaries and benefits',
    },
    {
      category: 'Tool Cost',
      amount: costBreakdown.toolCost,
      icon: '🛠️',
      color: '#f59e0b',
      description: 'Software licenses and development tools',
    },
    {
      category: 'Infrastructure Cost',
      amount: costBreakdown.infrastructureCost,
      icon: '☁️',
      color: '#8b5cf6',
      description: 'Cloud services, hosting, and servers',
    },
    {
      category: 'Other Costs',
      amount: costBreakdown.otherCosts,
      icon: '📦',
      color: '#10b981',
      description: 'Miscellaneous expenses',
    },
  ]

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid #e5e5e5',
        background: '#fafafa',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1a1a1a',
          margin: 0,
        }}>
          Cost Breakdown
        </h2>
        <p style={{
          fontSize: '13px',
          color: '#666666',
          margin: '4px 0 0 0',
        }}>
          Detailed breakdown of project expenses
        </p>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}>
          <thead>
            <tr style={{ background: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Category
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Description
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'right',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Amount
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'right',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            {costs.map((cost, index) => (
              <tr 
                key={index}
                style={{
                  borderBottom: index < costs.length - 1 ? '1px solid #f0f0f0' : 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{
                  padding: '20px 24px',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `${cost.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}>
                      {cost.icon}
                    </div>
                    <div style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                    }}>
                      {cost.category}
                    </div>
                  </div>
                </td>
                <td style={{
                  padding: '20px 24px',
                  fontSize: '14px',
                  color: '#666666',
                }}>
                  {cost.description}
                </td>
                <td style={{
                  padding: '20px 24px',
                  textAlign: 'right',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: cost.color,
                }}>
                  {formatCurrency(cost.amount)}
                </td>
                <td style={{
                  padding: '20px 24px',
                  textAlign: 'right',
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <div style={{
                      width: '60px',
                      height: '8px',
                      background: '#f0f0f0',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${calculatePercentage(cost.amount)}%`,
                        height: '100%',
                        background: cost.color,
                        borderRadius: '4px',
                      }} />
                    </div>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      minWidth: '45px',
                    }}>
                      {calculatePercentage(cost.amount)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{
              background: '#fafafa',
              borderTop: '2px solid #e5e5e5',
            }}>
              <td colSpan={2} style={{
                padding: '20px 24px',
                fontSize: '16px',
                fontWeight: 700,
                color: '#1a1a1a',
              }}>
                Total Expenses
              </td>
              <td style={{
                padding: '20px 24px',
                textAlign: 'right',
                fontSize: '18px',
                fontWeight: 700,
                color: '#1a1a1a',
              }}>
                {formatCurrency(totalExpense)}
              </td>
              <td style={{
                padding: '20px 24px',
                textAlign: 'right',
                fontSize: '16px',
                fontWeight: 700,
                color: '#1a1a1a',
              }}>
                100%
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default CostBreakdownTable
