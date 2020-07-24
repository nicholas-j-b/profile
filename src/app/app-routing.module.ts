import { HobbyPageComponent } from './components/hobby/hobby-page/hobby-page.component';
import { ProfessionalPageComponent } from './components/professional/professional-page/professional-page.component';
import { AboutPageComponent } from './components/about/about-page/about-page.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';
import { WelcomePageComponent } from './components/welcome/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'welcome', component: WelcomePageComponent
  },
  {
    path: 'projects', component: ProjectsPageComponent
  },
  {
    path: 'about', component: AboutPageComponent
  },
  {
    path: 'professional', component: ProfessionalPageComponent
  },
  {
    path: 'hobby', component: HobbyPageComponent
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'welcome', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
