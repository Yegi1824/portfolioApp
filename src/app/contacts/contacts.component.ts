import {Component, HostBinding, OnInit} from '@angular/core';
import {faShareAlt, faMinus, faBatteryEmpty} from '@fortawesome/free-solid-svg-icons';
import {routingAnimation} from "../shared/animations/routing-animation";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [routingAnimation],
})

export class ContactsComponent implements OnInit {
  faBatteryEmpty = faBatteryEmpty;
  faMinus = faMinus;
  faShareAlt = faShareAlt;
  @HostBinding('@routingAnimation') private routing = {};

  private form: FormGroup = new FormGroup({});

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }


  submit() {


// @ts-ignore
    let name = document.getElementById('name').value
// @ts-ignore
    let email = document.getElementById('email').value
// @ts-ignore
    let text = document.getElementById('text').value

    alert(`name: ${name}
email: ${email}
text: ${text}`)

  }
}
