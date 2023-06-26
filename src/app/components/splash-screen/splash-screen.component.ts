import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { DEFAULT_IMAGE_TEXT } from "src/constants/constant";
import { ICONS } from 'src/assets/icons/icons';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit, OnDestroy {
  readonly iconImageUrl = ICONS.LOGO;
  readonly imgText= DEFAULT_IMAGE_TEXT;
  private timeoutID: ReturnType<typeof setTimeout>;
  showSplash: boolean;

  constructor(private utilityService: UtilityService) {}

  ngOnInit() {
    this.showSplash = this.utilityService.showSplash;
    this.timeoutID = setTimeout(() => {
      this.showSplash = false
    }, 2000);
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutID);
  }
} 
