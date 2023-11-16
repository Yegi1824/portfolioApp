import {Component, HostBinding} from '@angular/core';
import { faShareAlt, faMinus, faBatteryHalf, faEye, faBars, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {routingAnimation} from "../shared/animations/routing-animation";
import {Router} from "@angular/router";


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [routingAnimation]
})

export class PortfolioComponent {
  faBatteryHalf = faBatteryHalf;
  faMinus = faMinus;
  faShareAlt = faShareAlt;
  faEye = faEye;
  faBars = faBars;
  bShowProject = false;
  faBriefcase = faBriefcase;
  @HostBinding('@routingAnimation') private routing = {};
  constructor(private router: Router) {
  }
}
