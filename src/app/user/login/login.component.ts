import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private user: UserService
  ) { }

  requestError;

  formHandler(formValue: { username: string, password: string }) {

    this.user.login(formValue).subscribe(
      (data: { sessionToken: string }) => {
        this.router.navigateByUrl('/home');
        localStorage.setItem('sessionToken', data.sessionToken);
      }),
      (error) => {
        console.log(error.error.error);
      }
  }
}
