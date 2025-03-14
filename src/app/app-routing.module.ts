import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageindexComponent } from './pageindex/pageindex.component';
import { PageloginComponent } from './pagelogin/pagelogin.component';
import { PageresigterComponent } from './pageresigter/pageresigter.component';
import { PageproductComponent } from './pageproduct/pageproduct.component';
import { PageuserComponent } from './pageuser/pageuser.component';
import { PageproductallComponent } from './pageproductall/pageproductall.component';
import { PagecartComponent } from './pagecart/pagecart.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/pageindex',
    pathMatch: 'full'
  },
  {
    path: 'pageindex',
    component: PageindexComponent,
    children: []
  },
  {
    path: 'pagelogin',
    component: PageloginComponent
  },
  {
    path: 'pageresigter',
    component: PageresigterComponent
  },
  {
    path: 'pageproduct/:id/:name',
    component:PageproductComponent
  },
  {
    path: 'pageuser',
    component:PageuserComponent
  },
  {
    path: 'pagecart',
    component:PagecartComponent
  },
  {
    path: 'pageproductall',
    component:PageproductallComponent
  },
  {path:'**', redirectTo: 'pageindex' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
