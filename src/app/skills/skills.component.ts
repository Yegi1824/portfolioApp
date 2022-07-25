import { Component, HostBinding } from '@angular/core';
import { faShareAlt, faMinus, faBatteryThreeQuarters, faCog, faBook } from '@fortawesome/free-solid-svg-icons';
import {routingAnimation} from "../shared/animations/routing-animation";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [routingAnimation]
})

export class SkillsComponent {
  faBatteryThreeQuarters = faBatteryThreeQuarters;
  faMinus = faMinus;
  faShareAlt = faShareAlt;
  faCog = faCog;
  faBook = faBook;
  @HostBinding('@routingAnimation') private routing = {};
}
