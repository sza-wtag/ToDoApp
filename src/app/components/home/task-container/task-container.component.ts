import { Component, OnInit } from '@angular/core';
import { faTrash, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/models/task.model';
import { TaskFactoryService } from 'src/app/services/task-factory.service';
import { TaskService } from 'src/app/services/task.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})

export class TaskContainerComponent implements OnInit {
  faDelete = faTrash;
  faDone = faCheck;
  faEdit = faPen;
  tasks : Task[] = [];
  taskName : string;
  
  constructor(private _taskService: TaskService, private _taskFactoryService: TaskFactoryService, public _utilityService: UtilityService){}

  onAddTask() {
    this.taskName = this.taskName.replace(/^\s+|\s+$/gm, '').trim();
    if(this.taskName) {
      this._taskService.addTask(this._taskFactoryService.createTask(this.taskName));
    }

    this.taskName = "";
    this._utilityService.showAddTask = false;
  }

  onDeleteTask(deleteTaskId: number){
    this._taskService.deleteTask(deleteTaskId);
    console.log("delete")
  }

  hideAddTaskCard() { 
    this._utilityService.showAddTask = false;
    this.taskName = "";
  }

  ngOnInit(): void {
    this.tasks = this._taskService.getTasks();
  }

}
