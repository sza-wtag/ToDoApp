import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { IMAGE_TEXT } from 'src/constants/constant';

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
      this.imgText = IMAGE_TEXT 
  }
}
