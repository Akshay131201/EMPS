import type { EmployeeStatus as EmployeeStatusType } from '../types/employee.types'

interface Props {
  status: EmployeeStatusType
}

const EmployeeStatus = ({ status }: Props) => {
  return (
    <span
      style={{
        padding: '6px 12px',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 500,
        backgroundColor: status === 'ACTIVE' ? '#f0f0f0' : '#fafafa',
        color: status === 'ACTIVE' ? '#1a1a1a' : '#666',
        border: status === 'ACTIVE' ? '1px solid #e5e5e5' : '1px solid #e5e5e5',
      }}
    >
      {status}
    </span>
  )
}

export default EmployeeStatus
