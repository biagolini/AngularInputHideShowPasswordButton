import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hidePassword = true;

  loginForm = this.fb.group({
    userName: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder) {}
}
