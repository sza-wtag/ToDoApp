import { Component } from '@angular/core';
import { DEFAULT_IMAGE_TEXT } from 'src/constants/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  imgText = DEFAULT_IMAGE_TEXT;
  logoIconUrl = "../../../assets/icons/logo.svg";
  searchIconUrl = "../../../assets/icons/searchIcon.svg";
}
