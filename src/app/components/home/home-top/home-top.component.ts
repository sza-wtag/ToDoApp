import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.scss'],
})
export class HomeTopComponent {
  faPlus = faPlus;

  @Input() 
  showAddTask: boolean;

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>()

  toggleShowAddTask() {
    this.notify.emit(!this.showAddTask);
  }
}
