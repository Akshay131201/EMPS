interface RoleAndTeamSectionProps {
  roleInfo: {
    employeeId: string
    role: string
    department: string
    team: string
    reportingTo: string
    reportingToRole: string
    joinDate: string
    employmentType: string
  }
}

const RoleAndTeamSection = ({ roleInfo }: RoleAndTeamSectionProps) => {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      border: '1px solid #e5e7eb',
    }}>
      <h2 style={{
        fontSize: '20px',
        fontWeight: 600,
        color: '#1f2937',
        marginBottom: '24px',
      }}>
        Role & Team Information
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
      }}>
        {/* Employee ID */}
        <div>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}>
            Employee ID
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
          }}>
            {roleInfo.employeeId}
          </div>
        </div>

        {/* Role */}
        <div>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}>
            Role
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1e40af',
          }}>
            {roleInfo.role}
          </div>
        </div>

        {/* Department */}
        <div>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}>
            Department
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
          }}>
            {roleInfo.department}
          </div>
        </div>

        {/* Team */}
        <div>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}>
            Team
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
          }}>
            {roleInfo.team}
          </div>
        </div>

        {/* Reporting To */}
        <div>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}>
            Reporting To
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
          }}>
            {roleInfo.reportingTo}
          </div>
          <div style={{
            fontSize: '13px',
            color: '#6b7280',
            marginTop: '4px',
          }}>
            {roleInfo.reportingToRole}
          </div>
        </div>

        {/* Join Date */}
        <div>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}>
            Join Date
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
          }}>
            {new Date(roleInfo.joinDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>

        {/* Employment Type */}
        <div>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}>
            Employment Type
          </div>
          <div style={{
            display: 'inline-block',
            padding: '6px 12px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 600,
            background: '#04785720',
            color: '#047857',
          }}>
            {roleInfo.employmentType}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleAndTeamSection
