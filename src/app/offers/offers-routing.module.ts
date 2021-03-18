import { RouterModule, Routes } from '@angular/router'
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { MyoffersComponent } from './myoffers/myoffers.component';

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
    }
]

export const OffersRoutingModule = RouterModule.forChild(routes);