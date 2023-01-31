import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { IstAuthenticatedGuard } from './ist-authenticated.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'mainpage', component: MainpageComponent, canActivate: [IstAuthenticatedGuard] },
  { path: '', component: MainpageComponent, canActivate: [IstAuthenticatedGuard] },
  { path: 'logout', component: LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
