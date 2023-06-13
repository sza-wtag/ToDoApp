import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  tasksArray : Task[] = [];
  addTask (task: Task){
    this.tasksArray.unshift(task)
  }
  deleteTask (deleteTaskId: number){
    this.tasksArray.splice(deleteTaskId,1);
  }
  getTasks(){
    return this.tasksArray
  }

}
