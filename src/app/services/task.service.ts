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

  deleteTask(deleteTaskId: number) {
    const indexOfTask = this.getTaskIndex(deleteTaskId);
    this.tasksArray.splice(indexOfTask,1);
  }

  editTask(editTaskid: number, newName: string){
    const indexOfTask = this.getTaskIndex(editTaskid);
    this.tasksArray[indexOfTask].name = newName;
    this.tasksArray[indexOfTask].editable = false;
  }

  editAndDoneTask(editTaskid: number, newName: string){
    const indexOfTask = this.getTaskIndex(editTaskid);
    this.tasksArray[indexOfTask].status = true;
    this.editTask(editTaskid,newName);
  }

  deleteEditedTask(deleteEditTaskId: number) {
    const indexOfTask = this.getTaskIndex(deleteEditTaskId);
    this.tasksArray[indexOfTask].editable = false;
  }

  updateTaskStatus(completedTaskId: number) {
    const indexOfTask = this.getTaskIndex(completedTaskId);
    const daysToComplete = this.getDaysToComplete(indexOfTask)
    this.tasksArray[indexOfTask].status = true;
    this.tasksArray[indexOfTask].daysToComplete = daysToComplete;
  }

  updateTaskEditableStatus(editTaskId: number) {
    const indexOfTask = this.getTaskIndex(editTaskId);
    this.tasksArray[indexOfTask].editable = true;
  }

  getTasks() {
    return this.tasksArray;
  }

  getTaskById(id: number) {
    const indexOfTask = this.getTaskIndex(id);
    return  this.tasksArray[indexOfTask]
  }

  getTaskIndex(id: number) {
    const index = this.tasksArray.findIndex(task => {
      return task.id === id;
    });
    return index;
  }

  getDaysToComplete(index: number) {
    const doneDate = formatDate (new Date(), 'dd.MM.YY', 'en')
    const createDate = this.tasksArray[index].createDate
    const diffTime = Math.abs(parseFloat(doneDate)  - parseFloat(createDate));
    return diffTime.toString();
  }
}
