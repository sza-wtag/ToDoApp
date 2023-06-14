import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UtilityService } from 'src/app/services/utility.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.scss']
})
export class HomeTopComponent {
  //icons
  faPlus = faPlus;
  show = this._utilityService.SHOW_SPLASH;

  constructor(private _utilityService: UtilityService){}

  @Output() showEvent = new EventEmitter<boolean>();

  showAddTaskCard()  {
    this.showEvent.emit(true);
  }
}
