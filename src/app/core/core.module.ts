import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    UserPanelComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
