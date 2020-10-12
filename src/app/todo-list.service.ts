import { Injectable } from '@angular/core';

const list: ToDo[] = []

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  get(): ToDo[] {
    return list
  }
  add(todo: ToDoInput): void {
    list.push({ ...todo, status: 'todo' })
  }
}
