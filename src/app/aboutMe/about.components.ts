import {Component, HostBinding} from '@angular/core';
import {faBatteryFull, faCalendarCheck, faMinus, faShareAlt, faHandPeace} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faGithub, faInstagram, faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import {routingAnimation} from "../shared/animations/routing-animation";

type myInfo_Model = {
  sName: string,
  sKey: string,
  sValue: string,
  sType: string
};

const INFO_L: string[] = [
  'Age', 'Address', 'Email', 'Phone', 'Freelance'
]
const aoMyInfo_MOCK: myInfo_Model[] = [
  {
    sName: 'Age',
    sKey: 'age',
    sValue: '23',
    sType: 'number'
  },
  {
    sName: 'Address',
    sKey: 'address',
    sValue: 'Ukraine, Dnipro 49000',
    sType: 'location'
  },
  {
    sName: 'Email',
    sKey: 'email',
    sValue: 'egorkaishchenko@gmail.com',
    sType: 'email'
  },
  {
    sName: 'Phone',
    sKey: 'tel',
    sValue: '+380976170090',
    sType: 'tel'
  },
  {
    sName: 'Experience',
    sKey: 'experience',
    sValue: 'Front-end Developer </br> Since 2020-10-11',
    sType: 'string'
  }
]

@Component({
  selector: 'app-about',
  templateUrl: './about.components.html',
  styleUrls: ['./about.components.scss'],
  animations: [routingAnimation]
})

export class AboutComponents {
  faBatteryFull = faBatteryFull;
  faMinus = faMinus;
  faShareAlt = faShareAlt;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTelegramPlane = faTelegramPlane;
  faGithub = faGithub;
  faCalendarCheck = faCalendarCheck;
  faHandPeace = faHandPeace;
  @HostBinding('@routingAnimation') private routing = {};

  public aoMyInfo: myInfo_Model[] = aoMyInfo_MOCK;
}
