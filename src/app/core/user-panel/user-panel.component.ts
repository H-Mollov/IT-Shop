import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/+store/actions';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

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
