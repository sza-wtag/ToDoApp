import { Component, OnInit, OnDestroy , ViewEncapsulation } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import {DEFAULT_IMAGE_TEXT} from "src/constants/constant";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit , OnDestroy {
  showSplash: boolean;
  imgText= DEFAULT_IMAGE_TEXT;
  timeOutID: number;
  iconImageUrl = "../../../assets/icons/logo.svg";

  constructor(private _utilityService: UtilityService) {}

  ngOnInit() {
    this.showSplash = this._utilityService.showSplash;
    this.timeOutID =   window.setTimeout(() => {
      this.showSplash = false
    }, 2000);
  }

  ngOnDestroy() {
      clearTimeout(this.timeOutID);
    }
  }
 
