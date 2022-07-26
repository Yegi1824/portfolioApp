import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {HeaderComponents} from "./header/header.components";
import {AboutComponents} from "./aboutMe/about.components";
import {SkillsComponent} from './skills/skills.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {EducationComponent} from './education/education.component';
import {ContactsComponent} from './contacts/contacts.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CvComponentComponent } from './portfolio/projects/cv-component/cv-component.component';
import { ModalComponent } from './portfolio/modal/modal/modal.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

const appRouts: Routes = [
  {path: 'about', component: AboutComponents},
  {path: 'skills', component: SkillsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'education', component: EducationComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'portfolio/cv', component: CvComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponents,
    AboutComponents,
    SkillsComponent,
    PortfolioComponent,
    EducationComponent,
    ContactsComponent,
    CvComponentComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    FontAwesomeModule,
    [BrowserAnimationsModule],
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
