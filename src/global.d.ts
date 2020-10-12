interface ToDo {
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'done' | 'archive'
}

interface ToDoInput {
  title: string
  description: string
}
