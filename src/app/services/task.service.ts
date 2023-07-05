import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksArray: Task[] = [];

  addTask(task: Task) {
    this.tasksArray.unshift(task);
  }

  getTasks() {
    return this.tasksArray;
  }
}
