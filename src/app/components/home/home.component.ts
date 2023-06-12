import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
    tasks = [
      { name:"Task1", time:"21.02.22", status: "undone"},
      { name:"Task2", time:"21.02.22", status: "undone"},
      { name:"Task3", time:"21.02.22", status: "undone"},
      { name:"Task4", time:"21.02.22", status: "undone"},
    ]
    show = false;
    showAddTaskCard(){
      this.show = true
    }
    // eslint-disable-next-line 
    task_name : any
    currentDate = formatDate(new Date(), 'dd.MM.YY', 'en');
    
    addTask(){
      this.tasks.push({name:this.task_name,time:this.currentDate,status: "undone"});
      this.task_name=""
      alert("New Tast Added!")
      this.show = false
    }
    hideAddTaskCard(){
      this.show = false
    }
}
