import { statsCardsData } from '../data/dashboardData'

const StatsCards = () => {
  return (
    <div className="stats-grid">
      {statsCardsData.map((item, index) => (
        <div key={index} className="stat-card">
          <div className="stat-title">{item.title}</div>
          <div className="stat-value">{item.value}</div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
