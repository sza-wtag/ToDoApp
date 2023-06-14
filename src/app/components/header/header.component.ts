import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imgText = ''
  imageUrl = "../../../assets/icons"
  constructor(private _utilityService: UtilityService){}
    ngOnInit(){
      this.imgText = this._utilityService.IMG_TEXT
  }
}
