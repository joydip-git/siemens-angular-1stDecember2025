import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { password } from '../../validators/password-validator';
import { Router, RouterLink } from "@angular/router";
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../../../services/token-storage.service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy {
  loginFrm: FormGroup;
  private userSubscription?: Subscription;

  constructor(
    private builder: FormBuilder,
    private userSvc: UserService,
    private tokenSvc: TokenStorageService,
    private router: Router
  ) {

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
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }

  get userName() {
    return this.loginFrm.controls['username']
  }
  get passWord() {
    return this.loginFrm.controls['password']
  }

  submit() {
    if (window.confirm('submit?')) {
      const formData = this.loginFrm.value
      // const user: User = {
      //   username: formData['username'],
      //   password: formData['password']
      // }
      //when the form control properties in the form group has the same name as the of the model properties
      const user = this.loginFrm.value as User
      this
        .userSvc
        .login(user)
        .subscribe({
          next: (response) => {
            if (response.data !== null) {
              console.log(response.data);
              //localStorage.setItem('token', response.data)
              this.tokenSvc.saveToken(response.data)
              this.router.navigate(['/products'])
            } else {
              window.alert(response.message)
            }
          },
          error: (err) => {
            window.alert(err.message)
          }
        })
    }
  }
}
