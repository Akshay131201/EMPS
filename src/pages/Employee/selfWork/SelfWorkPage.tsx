import { useNavigate } from 'react-router-dom'
import SelfWorkTable from './components/SelfWorkTable'
import { employeeSelfWork } from './data/selfWorkData'

const SelfWorkPage = () => {
  const navigate = useNavigate()

  const workStats = {
    total: employeeSelfWork.length,
    draft: employeeSelfWork.filter(w => w.status === 'draft').length,
    pending: employeeSelfWork.filter(w => w.approvalState === 'pending').length,
    approved: employeeSelfWork.filter(w => w.approvalState === 'approved').length,
  }

  return (
    <div style={{
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Page Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px',
      }}>
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '8px',
          }}>
            My Self Work
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0,
          }}>
            Track your personal initiatives and improvements
          </p>
        </div>
        <button
          onClick={() => navigate('/employee/self-work/create')}
          style={{
            padding: '12px 24px',
            background: '#1e40af',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#1e3a8a'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#1e40af'}
        >
          + Add Self Work
        </button>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '32px',
      }}>
        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '4px',
          }}>
            {workStats.total}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Total Work Items
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#374151',
            marginBottom: '4px',
          }}>
            {workStats.draft}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Drafts
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#b45309',
            marginBottom: '4px',
          }}>
            {workStats.pending}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Pending Approval
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#047857',
            marginBottom: '4px',
          }}>
            {workStats.approved}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Approved
          </div>
        </div>
      </div>

      {/* Self Work Table */}
      <SelfWorkTable works={employeeSelfWork} />
    </div>
  )
}

export default SelfWorkPage
