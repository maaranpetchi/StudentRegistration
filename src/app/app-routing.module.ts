import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './Components/registration-page/registration-page.component';
import { StudentDashboardComponent } from './Components/student-dashboard/student-dashboard.component';

const routes: Routes = [
  { path: 'register', component: RegistrationPageComponent },
  { path: 'dashboard', component: StudentDashboardComponent },
  { path: '',   redirectTo: '/register', pathMatch: 'full' }, // redirect to `first-component`
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
