import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: ToDo

  constructor() { }

  get availableStatuses() {
    const { status } = this.item
    if (status === 'todo') return ['todo', 'in-progress', 'archive']
    if (status === 'in-progress') return ['in-progress', 'done']
    if (status === 'done') return ['done', 'archive']
    return ['archive']
  }

  ngOnInit(): void {
  }

}
