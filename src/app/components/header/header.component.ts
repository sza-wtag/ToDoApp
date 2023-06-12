import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public img_text = ''
  constructor(private _utilityService: UtilityService){}
    ngOnInit(){
      this.img_text = this._utilityService.IMG_TEXT
  }
}
