import { RouterModule, Routes } from '@angular/router'
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component'

const routes: Routes = [
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'add',
        component: CreateComponent
    }
]

export const OffersRoutingModule = RouterModule.forChild(routes);