import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskFactoryService } from 'src/app/services/task-factory.service';
import { TaskService } from 'src/app/services/task.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AddTaskStore } from 'src/app/store/addTaskStore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit, OnDestroy {
  readonly faDelete = faTrash;
  protected taskName: string;
  protected showAddTask: boolean;
  protected subscriber: Subscription;

  constructor(
    private taskService: TaskService,
    private taskFactoryService: TaskFactoryService,
    private store: AddTaskStore
  ) {}

  onAddTask() {
    this.taskName = this.taskName.replace(/^\s+|\s+$/gm, '').trim();
    if (this.taskName) {
      this.taskService.addTask(
        this.taskFactoryService.createTask(this.taskName)
      );
    }

    this.taskName = '';
    this.store.setState(false);
  }

  hideAddTaskCard() {
    this.store.setState(false);
    this.taskName = '';
  }
  ngOnInit(): void {
    this.subscriber = this.store.state$.subscribe((data) => {
      this.showAddTask = data;
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
