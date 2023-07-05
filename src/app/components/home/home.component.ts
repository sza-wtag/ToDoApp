import { Icons } from 'src/assets/icons/icons';
import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { DEFAULT_IMAGE_TEXT } from 'src/constants/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly imgText: string = DEFAULT_IMAGE_TEXT;
  readonly addOneIconUrl = Icons.addOne;
  protected tasks = this.taskService.getTasks();
  protected showAddTask = false;

  constructor(
    private taskService: TaskService,
  ) {}

  showAddTaskCard() {
    this.showAddTask = true;
  }

  getShowAddTask(status: boolean){
    this.showAddTask = status
  }
}
