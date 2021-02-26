import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [CreateComponent, UpdateComponent, ListComponent, DetailsComponent],
  imports: [
    CommonModule
  ]
})
export class OffersModule { }
