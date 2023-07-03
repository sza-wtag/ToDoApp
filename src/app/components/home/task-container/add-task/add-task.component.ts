import { Component } from '@angular/core';
import { TaskFactoryService } from 'src/app/services/task-factory.service';
import { TaskService } from 'src/app/services/task.service';
import { UtilityService } from 'src/app/services/utility.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  faDelete = faTrash;
  taskName: string;

  constructor(
    private taskService: TaskService,
    private taskFactoryService: TaskFactoryService,
    public utilityService: UtilityService
  ) {}

  onAddTask() {
    this.taskName = this.taskName.replace(/^\s+|\s+$/gm, '').trim();
    if (this.taskName) {
      this.taskService.addTask(
        this.taskFactoryService.createTask(this.taskName)
      );
    }

    this.taskName = '';
    this.utilityService.showAddTask = false;
  }

  hideAddTaskCard() {
    this.utilityService.showAddTask = false;
    this.taskName = '';
  }
}
