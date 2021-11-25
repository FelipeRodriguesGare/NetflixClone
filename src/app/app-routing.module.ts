import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "main/:id", component: MainComponent},
  {path: "users", component: UsersComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
