import { ITask } from './../../models/task.model';
import { TaskFactoryService } from './../../services/task-factory.service';
import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private _taskService: TaskService , private _utilityService: UtilityService, private _taskFactoryService: TaskFactoryService){}

 
  showAddTaskCard() {
    this.show = true
  }

  ngOnInit(): void {
    this.imgText = this._utilityService.IMG_TEXT
  }

}
