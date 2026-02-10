import type { Task } from '../types/task.types'
import TaskStatus from './TaskStatus'
import TaskPriority from './TaskPriority'
import TaskActions from './TaskActions'

interface Props {
  task: Task
}

const TaskRow = ({ task }: Props) => {
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
        <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
          {task.title}
        </div>
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {task.project}
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1a1a1a' }}>
        {task.assignedTo}
      </td>

      <td style={{ padding: '16px 20px' }}>
        <TaskPriority priority={task.priority} />
      </td>

      <td style={{ padding: '16px 20px' }}>
        <TaskStatus status={task.status} />
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {task.deadline}
      </td>

      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
        <TaskActions taskId={task.id} />
      </td>
    </tr>
  )
}

export default TaskRow
