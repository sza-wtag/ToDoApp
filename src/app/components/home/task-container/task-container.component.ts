import { Component, OnDestroy, OnInit } from '@angular/core';
import { faTrash, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { AddTaskStore } from 'src/app/store/addTaskStore';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit, OnDestroy {
  readonly faDelete = faTrash;
  readonly faDone = faCheck;
  readonly faEdit = faPen;
  protected tasks: Task[] = [];
  protected showAddTask: boolean;
  protected subscriber: Subscription;

  constructor(private taskService: TaskService, private store: AddTaskStore) {}

  toggleShowAddTask() {
    this.store.setState(!this.showAddTask);
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.subscriber = this.store.state$.subscribe((data) => {
      this.showAddTask = data;
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
