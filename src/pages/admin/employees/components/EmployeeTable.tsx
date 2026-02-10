import { employeesData } from '../data/employeesData'
import EmployeeRow from './EmployeeRow'

const EmployeeTable = () => {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
      }}
    >
      <thead>
        <tr
          style={{
            textAlign: 'left',
            fontSize: '12px',
            color: '#666',
            fontWeight: 500,
            borderBottom: '1px solid #e5e5e5',
          }}
        >
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Employee</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Role</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Department</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Status</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Joined</th>
          <th style={{ padding: '16px 20px', textAlign: 'right', fontWeight: 500 }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employeesData.map((emp) => (
          <EmployeeRow key={emp.id} employee={emp} />
        ))}
      </tbody>
    </table>
  )
}

export default EmployeeTable
