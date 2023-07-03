import { Icons } from 'src/assets/icons/icons';
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
  addOneIconUrl = Icons.addOne;
  tasks = this.taskService.getTasks();

  constructor(private taskService: TaskService, public utilityService: UtilityService){}

  showAddTaskCard() {
    this.utilityService.showAddTask = true;
  }
}
