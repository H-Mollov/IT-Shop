import { RouterModule, Routes } from '@angular/router'
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component'
import { OffersService } from './offers.service'

let getOffers: OffersService;

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
    }
]

export const OffersRoutingModule = RouterModule.forChild(routes);