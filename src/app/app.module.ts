import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome/welcome-page/welcome-page.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';
import { AboutPageComponent } from './components/about/about-page/about-page.component';
import { ProfessionalPageComponent } from './components/professional/professional-page/professional-page.component';
import { HobbyPageComponent } from './components/hobby/hobby-page/hobby-page.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { NavBarItemComponent } from './components/nav/nav-bar-item/nav-bar-item.component';
import { NavHeaderComponent } from './components/nav/nav-header/nav-header.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    ProfessionalPageComponent,
    HobbyPageComponent,
    NavBarComponent,
    NavBarItemComponent,
    NavHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
