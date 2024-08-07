export type ID = string;

export interface Task {
  id: ID
  title: string
  createdAt: Date
}

export interface Column {
  id: ID
  title: string
  tasks: Task[]
}

export interface Review {
  id: ID
  name: string
  text: string
  avatar: string
}
