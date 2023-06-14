import { Component, OnInit } from '@angular/core';
import { faTrash, faCheck, faPen} from '@fortawesome/free-solid-svg-icons';
import { ITask } from 'src/app/models/task.model';
import { TaskFactoryService } from 'src/app/services/task-factory.service';
import { TaskService } from 'src/app/services/task.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {
  //icons
  faDelete = faTrash;
  faDone = faCheck;
  faEdit = faPen;
  tasks : ITask[] = [];
  taskName : string;
  show = this._utilityService.SHOW_SPLASH;

  constructor(private _taskService: TaskService, private _taskFactoryService: TaskFactoryService, private _utilityService: UtilityService){}

  onAddTask() {
    this.taskName = this.taskName.replace(/^\s+|\s+$/gm, '').trim();
    if(this.taskName){
      this._taskService.addTask(this._taskFactoryService.createTask(this.taskName));
    }
    this.taskName= "";
    this.show= false;
  }

  hideAddTaskCard() { 
    this.show = false;
    this.taskName= "";
  }

  ngOnInit(): void {
    this.tasks = this._taskService.getTasks();
  }

}
