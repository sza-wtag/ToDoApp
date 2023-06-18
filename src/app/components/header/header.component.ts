import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { DEFAULT_IMAGE_TEXT } from 'src/constants/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  imgText : string;
  logoIconUrl = "../../../assets/icons/logo.svg";
  searchIconUrl = "../../../assets/icons/searchIcon.svg";

  constructor(private _utilityService: UtilityService) {}

    ngOnInit() {
      this.imgText = DEFAULT_IMAGE_TEXT;
  }
}
