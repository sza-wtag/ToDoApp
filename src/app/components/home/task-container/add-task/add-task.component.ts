import { Component } from '@angular/core';
import { TaskFactoryService } from 'src/app/services/task-factory.service';
import { TaskService } from 'src/app/services/task.service';
import { UtilityService } from 'src/app/services/utility.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  faDelete = faTrash;
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

  hideAddTaskCard() { 
    this._utilityService.showAddTask = false;
    this.taskName = "";
  }

}
