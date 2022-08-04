import {Component, OnInit} from '@angular/core';

const LIST: string[] = [
  'about', 'skills', 'portfolio', 'education', 'contacts'
]

@Component({
  selector: 'app-header',
  templateUrl: './header.components.html',
  styleUrls: ['./header.components.scss']
})

export class HeaderComponents implements OnInit{
  public pathname: string = window.location.pathname;
  public list: string[] = LIST;
  public activeItem: string = '';

  ngOnInit() {
    this.activeItem = this.pathname.split('/')[1];
    if (!this.activeItem) {
      this.activeItem = 'about'
    }
  }

  public onSelectItem(item: string): void {
    this.activeItem = item;
  }
}
