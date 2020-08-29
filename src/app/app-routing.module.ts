import { ProjectsComponent } from './components/projects/projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', component : LandingComponent},
  {path: 'about', component : AboutComponent},
  {path: 'projects', component : ProjectsComponent},
  {path: 'contacts', component : ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
