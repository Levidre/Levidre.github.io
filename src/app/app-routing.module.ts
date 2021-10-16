import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/pages/index/index.component';
import { AzuraComponent } from './page/pages/azura/azura.component';
import { LevidreComponent } from './page/pages/levidre/levidre.component';
import { SaoriComponent } from './page/pages/saori/saori/saori.component';
import { MySaoriComponent } from './page/pages/saori/my-saori/my-saori.component';
import { SaoriCreationComponent } from './page/pages/saori/saori-creation/saori-creation.component';
import { UpdateComponent } from './page/pages/update/update/update.component';
import { UpdateHistoryComponent } from './page/pages/update/update-history/update-history.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'azura',
    component: AzuraComponent,
    pathMatch: 'full'
  },
  {
    path: 'levidre',
    component: LevidreComponent,
    pathMatch: 'full'
  },
  {
    path: 'saori',
    component: SaoriComponent,
    pathMatch: 'full'
  },
  {
    path: 'saori/my-saori',
    component: MySaoriComponent,
    pathMatch: 'full'
  },
  {
    path: 'saori/saori-creation',
    component: SaoriCreationComponent,
    pathMatch: 'full'
  },
  {
    path: 'update',
    component: UpdateComponent,
    pathMatch: 'full'
  },
  {
    path: 'update/update-history',
    component: UpdateHistoryComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
