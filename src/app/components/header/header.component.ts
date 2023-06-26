import { Component } from '@angular/core';
import { DEFAULT_IMAGE_TEXT } from 'src/constants/constant';
import { ICONS } from 'src/assets/icons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  readonly imgText = DEFAULT_IMAGE_TEXT;
  readonly logoIconUrl =ICONS.LOGO;
  readonly searchIconUrl = ICONS.SEARCH;
}
