import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { password } from '../../validators/password-validator';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  regFrm: FormGroup;

  constructor(private builder: FormBuilder) {

    this.regFrm = this.builder.group(
      {
        username: [
          '',
          [Validators.required, Validators.email]
        ],
        password: [
          '',
          [Validators.required, password]
        ]
      }
    )
  }

  get userName() {
    return this.regFrm.controls['username']
  }
  get passWord() {
    return this.regFrm.controls['password']
  }

  submit() {
    console.log(this.regFrm);

  }
}
