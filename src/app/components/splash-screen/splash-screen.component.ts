import { Component, OnInit, OnDestroy , ViewEncapsulation } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit , OnDestroy {
  windowWidth: string;
  show_splash:boolean;
  img_text: string;
  timeOutIDs:number[] = [];
  imageUrl = "../../../assets/icons";

  constructor(private _utilityService: UtilityService){}

  ngOnInit() {
    this.timeOutIDs.push(
      window.setTimeout (() => this.windowWidth ='-' + window.innerWidth + 'px',2000)
    );
   
    this.img_text = this._utilityService.IMG_TEXT;
    this.show_splash = this._utilityService.SHOW_SPLASH;
  }
 
  ngOnDestroy() {
      this.timeOutIDs.forEach(id => clearTimeout(id));
    }
  }
 
