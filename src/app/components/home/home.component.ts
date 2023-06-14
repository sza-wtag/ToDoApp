import { ITask } from './../../models/task.model';
import { TaskFactoryService } from './../../services/task-factory.service';
import { faTrash, faCheck, faPen} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent implements OnInit{

  imgText = '';
  show = this._utilityService.SHOW_SPLASH;
  tasks : ITask[] = [];
  taskName : string;
  //icons
  faDelete = faTrash;
  faDone = faCheck;
  faEdit = faPen;

  constructor(private _taskService: TaskService , private _utilityService: UtilityService, private _taskFactoryService: TaskFactoryService){}

  showAddTaskCard() {
    this.show = true
  }
  
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
    this.imgText = this._utilityService.IMG_TEXT
  }

}
