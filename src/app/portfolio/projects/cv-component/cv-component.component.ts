import { Component, OnInit } from '@angular/core';
import {faPhoneAlt, faMailBulk, faAddressBook} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.scss']
})
export class CvComponentComponent implements OnInit {
  faPhoneAlt = faPhoneAlt
  faMailBulk = faMailBulk
  faAddressBook = faAddressBook
  constructor() { }

  ngOnInit(): void {
  }

}
