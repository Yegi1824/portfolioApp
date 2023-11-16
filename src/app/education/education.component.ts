import {Component, HostBinding} from '@angular/core';
import {faShareAlt, faMinus, faBatteryQuarter, faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
import {routingAnimation} from "../shared/animations/routing-animation";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [routingAnimation]
})

export class EducationComponent {
  faBatteryQuarter = faBatteryQuarter;
  faMinus = faMinus;
  faBuildingColumns = faBuildingColumns;
  faShareAlt = faShareAlt;
  @HostBinding('@routingAnimation') private routing = {};
}
