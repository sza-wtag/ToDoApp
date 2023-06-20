import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasksArray : ITask[] = [];

  addTask(task: ITask) {
    this.tasksArray.unshift(task)
  }

  deleteTask(deleteTaskId: number){
    const indexOfTask = this.tasksArray.findIndex(object => {
      return object.id === deleteTaskId;
    });
    
    this.tasksArray.splice(indexOfTask,1)
  }

  getTasks() {
    return this.tasksArray
  }
}
