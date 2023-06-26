import { Component } from '@angular/core';
import { DEFAULT_IMAGE_TEXT } from 'src/constants/constant';
import { ICONS } from 'src/assets/icons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  imgText = DEFAULT_IMAGE_TEXT;
  logoIconUrl =ICONS.LOGO;
  searchIconUrl = ICONS.SEARCH;
}
