import { formatDate } from '@angular/common';
import { ITask } from './../models/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskFactoryService {
  task = {} as ITask;
  private static currentId = 0;

  createTask(taskName: string) {
      return this.task = {
      id: TaskFactoryService.currentId++,
      name: taskName,
      status: false,
      createDate: formatDate (new Date(), 'dd.MM.YY', 'en')
    } 
  }
}
