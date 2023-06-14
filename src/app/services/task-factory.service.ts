import { formatDate } from '@angular/common';
import { ITask } from './../models/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskFactoryService {

  task = {} as ITask;
  private static currentId = 0;

  createTask(task_name: string) {
    
      return this.task = {
      id: TaskFactoryService.currentId++,
      name: task_name,
      status: false,
      createDate: formatDate (new Date(), 'dd.MM.YY', 'en')
    } 
  }
}
