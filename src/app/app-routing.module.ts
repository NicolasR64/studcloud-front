import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { PrivateGroupsComponent } from './private-groups/private-groups.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TempMessagesComponent } from './temp-messages/temp-messages.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'topic/:id', component: TempMessagesComponent, canActivate: [AuthGuard] },
  { path: 'privateGroups', component: PrivateGroupsComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
