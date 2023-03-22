import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  hidePassword: boolean;

  get emailLoginForm(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordLoginForm(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor() {
    this.hidePassword = true;
    this.loginForm = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required ])
    });
  }

  login(): void {
    let loginValue = this.loginForm.value;
    console.log(loginValue)
  }

}
