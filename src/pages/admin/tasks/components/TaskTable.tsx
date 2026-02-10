import { tasksData } from '../data/tasksData'
import TaskRow from './TaskRow'

const TaskTable = () => {
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
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Task Title</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Project</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Assigned To</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Priority</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Status</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Deadline</th>
          <th style={{ padding: '16px 20px', textAlign: 'right', fontWeight: 500 }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {tasksData.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  )
}

export default TaskTable
