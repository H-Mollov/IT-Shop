import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { OffersRoutingModule } from './offers-routing.module';
import { LikedComponent } from './liked/liked.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'
import { FormsModule } from '@angular/forms';
import { MyoffersComponent } from './myoffers/myoffers.component';


@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ListComponent,
    DetailsComponent,
    LikedComponent,
    ShoppingCartComponent,
    MyoffersComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    FormsModule
  ]
})
export class OffersModule { }
