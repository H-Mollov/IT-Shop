import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    UserPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
