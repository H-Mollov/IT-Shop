import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    UserPanelComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
