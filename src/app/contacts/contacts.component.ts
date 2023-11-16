import {Component, HostBinding, OnInit} from '@angular/core';
import {faShareAlt, faMinus, faBatteryEmpty, faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {routingAnimation} from "../shared/animations/routing-animation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [routingAnimation],
})

export class ContactsComponent implements OnInit {
  faAddressBook = faAddressBook;
  @HostBinding('@routingAnimation') private routing = {};
  bSendingMessageInProcess: boolean = false;

  form: FormGroup;

  constructor(private oMatSnackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    })
  }

  getControls = (sKey: string) => {
    return this.form.controls[sKey];
  }

  submit() {
    this.form.markAllAsTouched();
    console.log(this.form)
    if (this.form.valid) {
    this.bSendingMessageInProcess = true;
      const url = `https://api.telegram.org/bot6515086023:AAG7OLIzY6bnN0vyim1Wc3MLJ8XTUDxQvbw/sendMessage`;

      const name = this.getControls('name').value;
      const email = this.getControls('email').value;
      const message = this.getControls('message').value;
      const sMessage = `Name (Company): [${name}]\nEmail: [${email}]\nMessage: [${message}]`;

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '202036089',
          text: sMessage,
        }),
      }).then((oRes: any) => {
        this.bSendingMessageInProcess = false;
        this.form.reset();
        this.oMatSnackBar.open('Thank you for reaching out! I appreciate your interest and will get back to you shortly with a response. Stay tuned!',
          'Close', {
          duration: 5000
        })
      });
    }
  }
}
