import { Component, OnInit, OnDestroy , ViewEncapsulation } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import {IMAGE_TEXT} from "src/constants/constant";
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit , OnDestroy {
  windowWidth: string;
  showSplash: boolean;
  imgText: string;
  timeOutIDs: number[] = [];
  imageUrl = "../../../assets/icons";

  constructor(private _utilityService: UtilityService) {}

  ngOnInit() {
    this.imgText = IMAGE_TEXT;
    this.showSplash = this._utilityService.SHOW_SPLASH;
    
    this.timeOutIDs.push(
      window.setTimeout (() => this.showSplash = false,2000)
    );
  }
 
  ngOnDestroy() {
      this.timeOutIDs.forEach(id => clearTimeout(id));
    }
  }
 
