import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasksArray : Task[] = [];

  addTask(task: Task) {
    this.tasksArray.unshift(task);
  }

  deleteTask(deleteTaskId: number){
    const indexOfTask = this.tasksArray.findIndex(task => {
      return task.id === deleteTaskId;
    });
    
    this.tasksArray.splice(indexOfTask,1);
  }

  getTasks() {
    return this.tasksArray;
  }
}
