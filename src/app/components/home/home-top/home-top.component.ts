import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AddTaskStore } from 'src/app/store/addTaskStore';

@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.scss'],
})
export class HomeTopComponent implements OnInit, OnDestroy {
  readonly faPlus = faPlus;
  protected subscriber: Subscription;
  protected showAddTask: boolean;

  constructor(private store: AddTaskStore) {}

  toggleShowAddTask() {
    this.store.setState(!this.showAddTask);
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
