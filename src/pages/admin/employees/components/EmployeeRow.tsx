import  type { Employee } from '../types/employee.types'
import EmployeeStatusBadge from './EmployeeStatus'
import EmployeeActions from './EmployeeActions'

interface Props {
  employee: Employee
}

const EmployeeRow = ({ employee }: Props) => {
  return (
    <tr
      style={{
        borderBottom: '1px solid #f5f5f5',
        transition: 'background 0.15s ease',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#fafafa')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = 'transparent')
      }
    >
      <td style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '10px',
              backgroundColor: '#1a1a1a',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            {employee.name[0]}
          </div>
          <div>
            <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
              {employee.name}
            </div>
            <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>
              {employee.email}
            </div>
          </div>
        </div>
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1a1a1a' }}>
        {employee.role}
      </td>
      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1a1a1a' }}>
        {employee.department}
      </td>
      <td style={{ padding: '16px 20px' }}>
        <EmployeeStatusBadge status={employee.status} />
      </td>
      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {employee.joinedDate}
      </td>
      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
        <EmployeeActions />
      </td>
    </tr>
  )
}

export default EmployeeRow
