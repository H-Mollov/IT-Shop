import { RouterModule, Routes } from '@angular/router'
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { LikedComponent } from './liked/liked.component';
import { ListComponent } from './list/list.component';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'add',
        component: CreateComponent
    },
    {
        path: 'offers/:category',
        component: ListComponent,
    },
    {
        path: 'offers/details/:id',
        component: DetailsComponent
    },
    {
        path: 'offers/edit/:id',
        component: CreateComponent
    },
    {
        path: 'myOffers',
        component: MyoffersComponent
    },
    {
        path: 'likedOffers',
        component: LikedComponent
    },
    {
        path: 'boughtOffers',
        component: ShoppingCartComponent
    }
]

export const OffersRoutingModule = RouterModule.forChild(routes);