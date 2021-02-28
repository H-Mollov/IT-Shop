import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/+store/actions';
import { UserService } from '../../user/user.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private user: UserService,
    private store: Store<any>
  ) { }

  isLogged;
  currentUser = this.store.select(login).subscribe((data) => {
    this.isLogged = data.login.currentUser;
  })

  ngOnInit(): void {
  }

}
