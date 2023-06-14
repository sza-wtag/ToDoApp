import { ITask } from './../../models/task.model';
import { TaskFactoryService } from './../../services/task-factory.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent implements OnInit{

  img_text = '';
  show = this._utilityService.SHOW_SPLASH;
  faPlus = faPlus;
  tasks : ITask[] = [];
  task_name : string;

  constructor(private _taskService: TaskService , private _utilityService: UtilityService, private _taskFactoryService: TaskFactoryService){}

  showAddTaskCard() {
    this.show = true
  }
  
  onAddTask() {
    this.task_name = this.task_name.replace(/^\s+|\s+$/gm, '').trim();
    if(this.task_name){
      this._taskService.addTask(this._taskFactoryService.createTask(this.task_name));
    }
    this.task_name= "";
    this.show= false;
  }

  hideAddTaskCard() { 
    this.show = false;
    this.task_name= "";
  }

  ngOnInit(): void {
    this.tasks = this._taskService.getTasks();
    this.img_text = this._utilityService.IMG_TEXT
  }

}
