import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoListService) {}

  get list() {
    return this.todoService.get()
  }

  ngOnInit(): void {
  }

}
