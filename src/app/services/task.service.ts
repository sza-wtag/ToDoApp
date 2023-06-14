import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksArray : ITask[] = [];
  addTask (task: ITask){
    this.tasksArray.unshift(task)
  }

  getTasks(){
    return this.tasksArray
  }

}
