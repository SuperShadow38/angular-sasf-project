import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';

import { NavComponent } from './components/nav/nav.component';

import { ProductsListComponent } from './components/products-list/products-list.component';

import { FormUsersComponent } from './components/form-users/form-users.component';

import { ProductEditComponent } from './components/product-edit/ProductEditComponent';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      
      {
        path: 'users',
        component: ProductsListComponent
      },

      {
        path: 'users/create',
        component: FormUsersComponent
      },

      {
        path: 'users/edit/:id',
        component: ProductEditComponent
      },
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
