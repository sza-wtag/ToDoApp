import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskFactoryService } from 'src/app/services/task-factory.service';
import { TaskService } from 'src/app/services/task.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  faDelete = faTrash;
  taskName: string;
  @Input()
  showAddTask: boolean;
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private taskService: TaskService,
    private taskFactoryService: TaskFactoryService,
  ) {}

  onAddTask() {
    this.taskName = this.taskName.replace(/^\s+|\s+$/gm, '').trim();
    if (this.taskName) {
      this.taskService.addTask(
        this.taskFactoryService.createTask(this.taskName)
      );
    }

    this.taskName = '';
    this.notify.emit(false);
  }

  hideAddTaskCard() {
    this.notify.emit(false);
    this.taskName = '';
  }
}
