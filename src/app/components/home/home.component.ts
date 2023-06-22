import { Component} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UtilityService } from 'src/app/services/utility.service';
import { DEFAULT_IMAGE_TEXT } from 'src/constants/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  imgText: string = DEFAULT_IMAGE_TEXT;
  addOneIconUrl = "../../../assets/icons/addOne.svg";
  tasks = this._taskService.getTasks();

  constructor(private _taskService: TaskService, public _utilityService: UtilityService){}

  showAddTaskCard() {
    this._utilityService.showAddTask = true;
  }
}
