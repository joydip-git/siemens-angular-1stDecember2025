import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { password } from './validators/password-validator';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // name = 'joydip'
  // updateName(str: string) {
  //   this.name = str
  // }

  // name = signal('joydip')

  // emailCtrl = new FormControl('', [Validators.required, Validators.email])
  // pwdCtrl = new FormControl('', [Validators.required, password])

  // call() {
  //   console.log(this.pwdCtrl);
  // }

  // loginFrm = new FormGroup(
  //   {
  //     username: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required, password])
  //   }
  // )

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
