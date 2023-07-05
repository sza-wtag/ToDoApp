import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  readonly faDelete = faTrash;
  readonly faDone = faCheck;
  readonly faEdit = faPen;
  tasks: Task[] = [];

  @Input()
  showAddTask: boolean;

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private taskService: TaskService) {}

  toggleShowAddTask(status: boolean) {
    this.showAddTask = status;
    this.notify.emit(this.showAddTask);
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
