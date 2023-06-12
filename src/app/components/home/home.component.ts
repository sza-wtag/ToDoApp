import { Task } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { TaskService } from 'src/app/services/task.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit{

    constructor(private _taskService: TaskService , private _utilityService: UtilityService){}
    img_text = '';
    tasks:Task[] = [];
    task: Task = new Task();
    show = this._utilityService.SHOW_SPLASH;
    showAddTaskCard(){
      this.show = true
    }
    // eslint-disable-next-line 
    task_name : any
    currentDate = formatDate(new Date(), 'dd.MM.YY', 'en');
    
    onAddTask(){
      this.task_name = this.task_name.replace(/^\s+|\s+$/gm, '').trim();
      if(this.task_name){
        const newTask: Task = {
          id: this.task.id,
          name: this.task_name,
          status: this.task.status,
          createDate: this.task.createDate
        }
        this._taskService.addTask(newTask);
      }
      this.task_name= "";
      this.show= false;
    }
    hideAddTaskCard(){
      this.show = false;
      this.task_name= "";
    }
    ngOnInit(): void {
      this.tasks = this._taskService.getTasks();
      this.img_text = this._utilityService.IMG_TEXT
    }
  
}
