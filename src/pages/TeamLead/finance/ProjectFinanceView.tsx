import { useState, useMemo } from 'react'
import { projectsFinanceData } from './data/financeData'
import ProjectSelector from './components/ProjectSelector'
import FinanceCards from './components/FinanceCards'
import MonthlyTrendChart from './components/MonthlyTrendChart'
import CostBreakdownTable from './components/CostBreakdownTable'

const ProjectFinanceView = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(projectsFinanceData[0].projectId)

  // Get projects list for selector
  const projects = useMemo(() => {
    return projectsFinanceData.map(p => ({
      id: p.projectId,
      name: p.projectName,
    }))
  }, [])

  // Get selected project data
  const selectedProject = useMemo(() => {
    return projectsFinanceData.find(p => p.projectId === selectedProjectId) || projectsFinanceData[0]
  }, [selectedProjectId])

  return (
    <div style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '8px',
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: 0,
          }}>
            Project Finance View
          </h1>
          <span style={{
            padding: '4px 12px',
            background: '#e0e7ff',
            color: '#4338ca',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Read Only
          </span>
        </div>
        <p style={{
          fontSize: '14px',
          color: '#666666',
          margin: 0,
        }}>
          Financial overview and cost breakdown for your projects
        </p>
      </div>

      {/* Project Selector */}
      <ProjectSelector
        projects={projects}
        selectedProject={selectedProjectId}
        onProjectChange={setSelectedProjectId}
      />

      {/* Finance Cards */}
      <FinanceCards
        totalIncome={selectedProject.totalIncome}
        totalExpense={selectedProject.totalExpense}
        profitMargin={selectedProject.profitMargin}
        profitAmount={selectedProject.profitAmount}
      />

      {/* Monthly Trend Chart */}
      <MonthlyTrendChart monthlyData={selectedProject.monthlyData} />

      {/* Cost Breakdown Table */}
      <CostBreakdownTable
        costBreakdown={selectedProject.costBreakdown}
        totalExpense={selectedProject.totalExpense}
      />

      {/* Info Notice */}
      <div style={{
        marginTop: '24px',
        padding: '16px 20px',
        background: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
      }}>
        <div style={{ fontSize: '20px' }}>ℹ️</div>
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#1e40af',
            marginBottom: '4px',
          }}>
            Read-Only Access
          </div>
          <div style={{
            fontSize: '13px',
            color: '#1e40af',
            lineHeight: '1.5',
          }}>
            This is a read-only view for financial awareness. You cannot modify financial data. 
            Contact your administrator for any changes or detailed financial reports.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectFinanceView
