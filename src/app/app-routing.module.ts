import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'index',component:IndexComponent},
  {path:'product',component:ProductComponent},
  {path:'admin',component:DashboardComponent},
  {path:'admin/cate',component:ManageCategoriesComponent},
  {path:'admin/product',component:ManageProductsComponent},
  {path:'admin/user',component:ManageUsersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
