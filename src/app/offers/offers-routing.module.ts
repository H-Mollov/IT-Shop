import { RouterModule, Routes } from '@angular/router'
import { AuthenticateGuard } from '../core/guards/authenticate.guard';
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
        component: CreateComponent,
        canActivate: [AuthenticateGuard]
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
        component: MyoffersComponent,
        canActivate: [AuthenticateGuard]
    },
    {
        path: 'likedOffers',
        component: LikedComponent,
        canActivate: [AuthenticateGuard]
    },
    {
        path: 'boughtOffers',
        component: ShoppingCartComponent,
        canActivate: [AuthenticateGuard]
    }
]

export const OffersRoutingModule = RouterModule.forChild(routes);