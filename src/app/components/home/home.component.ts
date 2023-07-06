import { Icons } from 'src/assets/icons/icons';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { DEFAULT_IMAGE_TEXT } from 'src/constants/constant';
import { AddTaskStore } from 'src/app/store/addTaskStore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly imgText: string = DEFAULT_IMAGE_TEXT;
  readonly addOneIconUrl = Icons.addOne;
  protected tasks = this.taskService.getTasks();
  protected showAddTask: boolean;
  protected subscriber: Subscription;

  constructor(private taskService: TaskService, private store: AddTaskStore) {}

  showAddTaskCard() {
    this.store.setState(true);
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
