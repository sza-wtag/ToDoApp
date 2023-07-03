import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.scss'],
})
export class HomeTopComponent {
  faPlus = faPlus;

  constructor(private utilityService: UtilityService) {}

  showAddTask() {
    this.utilityService.showAddTask = true;
  }
}
