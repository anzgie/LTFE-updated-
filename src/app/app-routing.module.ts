import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingledetailComponent }from './singledetail/singledetail.component'
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CRUDComponent } from './crud/crud.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'single/:id', component: SingledetailComponent},
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'crud', component: CRUDComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
