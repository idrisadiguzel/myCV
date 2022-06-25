import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/pages/about/about.component';
//firebase imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideDatabase } from '@angular/fire/database';
import { getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment';
import { NaviComponent } from './common/navi/navi.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { ContactComponent } from './components/pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NaviComponent,
    ResumeComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
