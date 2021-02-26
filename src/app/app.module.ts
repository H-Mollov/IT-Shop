import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { UserPanelComponent } from './core/user-panel/user-panel.component';
import { ListComponent } from './offers/list/list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ListComponent,
    NavigationComponent,
    UserPanelComponent,
    FooterComponent
  ]
})
export class AppModule { }
