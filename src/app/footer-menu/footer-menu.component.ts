import { Component } from '@angular/core';
import {faUser, faGear, faFile, faBook, faAddressCard} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent {
  faUser = faUser;
  faGear = faGear;
  faFile = faFile;
  faBook = faBook;
  faAddressCard = faAddressCard;
}
