import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasksArray : Task[] = [];

  addTask(task: Task) {
    this.tasksArray.unshift(task);
  }

  deleteTask(deleteTaskId: number){
    const indexOfTask = this.getTaskIndex(deleteTaskId);
    this.tasksArray.splice(indexOfTask,1);
  }

  updateTaskStatus(completedTaskId: number){
    const indexOfTask = this.getTaskIndex(completedTaskId);
    const daysToComplete = this.getDaysToComplete(indexOfTask)
    this.tasksArray[indexOfTask].status = true;
    this.tasksArray[indexOfTask].daysToComplete = daysToComplete;
  }

  getTasks() {
    return this.tasksArray;
  }

  getTaskIndex(id: number){
    const index = this.tasksArray.findIndex(task => {
      return task.id === id;
    });
    return index;
  }

  getDaysToComplete(index: number){
    const doneDate = formatDate (new Date(), 'dd.MM.YY', 'en')
    const createDate = this.tasksArray[index].createDate
    const diffTime = Math.abs(parseFloat(doneDate)  - parseFloat(createDate));
    return diffTime.toString();
  }
}
