import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './contents/about/about.component';
import { EducationComponent } from './contents/education/education.component';
import { SkillsComponent } from './contents/skills/skills.component';
import { AchievementsComponent } from './contents/achievements/achievements.component';
import { ReferencesComponent } from './contents/references/references.component';
import { NavbarComponent } from './contents/navbar/navbar.component';
import { FooterComponent } from './contents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    AchievementsComponent,
    ReferencesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
