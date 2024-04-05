import { CommonModule} from '@angular/common';

import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Todo}  from "../../Todo";
import { TodoItemComponent } from '../todo-item/todo-item.component'; 
import { AddTodoComponent } from '../add-todo/add-todo.component'; 

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,TodoItemComponent ,AddTodoComponent
],

  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadTodosFromLocalStorage();
  }

  private loadTodosFromLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      const localItem = localStorage.getItem("todos");
      if (localItem) {
        this.todos = JSON.parse(localItem);
      }
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (error) {
      return false;
    }
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodosToLocalStorage();
    }
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveTodosToLocalStorage();
  }

  toggleTodo(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index].active = !this.todos[index].active;
      this.saveTodosToLocalStorage();
    }
  }

  private saveTodosToLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
}