export type EmployeeStatus = 'ACTIVE' | 'INACTIVE'

export interface Employee {
  id: string
  name: string
  email: string
  phone: string
  role: string
  department: string
  designation: string
  status: EmployeeStatus
  joinedDate: string
  skills: string[]
  avatar?: string
}
