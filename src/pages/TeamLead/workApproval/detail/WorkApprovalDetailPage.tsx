import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { workApprovalsData } from '../data/workApprovalData'
import InformationPanel from './components/InformationPanel'
import ActionButtons from './components/ActionButtons'
import FeedbackModal from './components/FeedbackModal'
import ConvertToTaskModal from './components/ConvertToTaskModal'

const WorkApprovalDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [showConvertModal, setShowConvertModal] = useState(false)

  const workApproval = workApprovalsData.find(w => w.id === id)

  if (!workApproval) {
    return (
      <div style={{ padding: '24px' }}>
        <div style={{
          background: '#ffffff',
          padding: '60px',
          borderRadius: '12px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
          <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Work Not Found</h2>
          <p style={{ color: '#666666', marginBottom: '24px' }}>
            The work approval you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/teamlead/work-approval')}
            style={{
              padding: '12px 24px',
              background: '#3b82f6',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Back to Work Approvals
          </button>
        </div>
      </div>
    )
  }

  const handleApprove = () => {
    alert(`Work ${workApproval.id} has been approved!`)
    navigate('/teamlead/work-approval')
  }

  const handleReject = () => {
    alert(`Work ${workApproval.id} has been rejected!`)
    navigate('/teamlead/work-approval')
  }

  const handleSendFeedback = (feedback: string) => {
    alert(`Feedback sent: ${feedback}`)
    setShowFeedbackModal(false)
  }

  const handleConvertToTask = (taskData: { title: string; priority: string; assignee: string }) => {
    alert(`Converted to task: ${taskData.title}`)
    setShowConvertModal(false)
  }

  return (
    <div style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <button
          onClick={() => navigate('/teamlead/work-approval')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'transparent',
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#666666',
            cursor: 'pointer',
            marginBottom: '16px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#fafafa'
            e.currentTarget.style.borderColor = '#d4d4d4'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = '#e5e5e5'
          }}
        >
          <span>←</span>
          <span>Back to Work Approvals</span>
        </button>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '8px',
            }}>
              {workApproval.workTitle}
            </h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '14px',
              color: '#666666',
            }}>
              <span>ID: {workApproval.id}</span>
              <span>•</span>
              <span>Submitted by {workApproval.employeeName}</span>
              <span>•</span>
              <span>{new Date(workApproval.submittedDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
          </div>

          <div style={{
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            background: workApproval.status === 'pending' ? '#fef3c7' : 
                       workApproval.status === 'approved' ? '#d1fae5' : '#fee2e2',
            color: workApproval.status === 'pending' ? '#92400e' : 
                   workApproval.status === 'approved' ? '#065f46' : '#991b1b',
          }}>
            {workApproval.status.charAt(0).toUpperCase() + workApproval.status.slice(1)}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 380px',
        gap: '24px',
      }}>
        {/* Main Content */}
        <div>
          <InformationPanel workApproval={workApproval} />
        </div>

        {/* Sidebar */}
        <div>
          <ActionButtons
            status={workApproval.status}
            onApprove={handleApprove}
            onReject={handleReject}
            onConvertToTask={() => setShowConvertModal(true)}
            onSendFeedback={() => setShowFeedbackModal(true)}
          />
        </div>
      </div>

      {/* Modals */}
      {showFeedbackModal && (
        <FeedbackModal
          onClose={() => setShowFeedbackModal(false)}
          onSend={handleSendFeedback}
        />
      )}

      {showConvertModal && (
        <ConvertToTaskModal
          workTitle={workApproval.workTitle}
          onClose={() => setShowConvertModal(false)}
          onConvert={handleConvertToTask}
        />
      )}
    </div>
  )
}

export default WorkApprovalDetailPage
