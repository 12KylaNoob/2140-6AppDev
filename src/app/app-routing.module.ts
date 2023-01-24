import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './contents/about/about.component';
import { AchievementsComponent } from './contents/achievements/achievements.component';
import { EducationComponent } from './contents/education/education.component';
import { ReferencesComponent } from './contents/references/references.component';
import { SkillsComponent } from './contents/skills/skills.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'references', component: ReferencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
