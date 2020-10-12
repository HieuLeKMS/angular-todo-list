import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TodoListService } from '../todo-list.service'

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  inputForm: FormGroup
  private value: ToDoInput = {
    title: '',
    description: ''
  }

  constructor(private todoService: TodoListService) {}

  get title() {
    return this.inputForm.get('title')
  }

  get description() {
    return this.inputForm.get('description')
  }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      title: new FormControl(this.value.title, [
        Validators.required,
        Validators.pattern(/^[_A-z0-9]*$/)
      ]),
      description: new FormControl(this.value.description, [
        Validators.required,
        Validators.maxLength(250)
      ])
    })
  }

  onSubmit(formData: ToDoInput) {
    console.log(this.todoService.get())
    this.todoService.add(formData)
    this.inputForm.reset()
  }
}
