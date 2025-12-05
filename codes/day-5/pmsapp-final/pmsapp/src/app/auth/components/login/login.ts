import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { password } from '../../validators/password-validator';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginFrm: FormGroup;

  constructor(private builder: FormBuilder) {

    this.loginFrm = this.builder.group(
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
    return this.loginFrm.controls['username']
  }
  get passWord() {
    return this.loginFrm.controls['password']
  }

  submit() {
    console.log(this.loginFrm);

  }
}
