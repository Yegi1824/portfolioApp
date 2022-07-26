import {Component, HostBinding} from '@angular/core';
import { faShareAlt, faMinus, faBatteryHalf, faEye, faBars} from '@fortawesome/free-solid-svg-icons';
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
  @HostBinding('@routingAnimation') private routing = {};
  constructor(private router: Router) {
  }

  onOpenProject (nID) {
    // this.router.navigate(['./portfolio/cv'])
    this.bShowProject = true
  }
}
