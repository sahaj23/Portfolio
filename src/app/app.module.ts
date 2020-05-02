import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";

import { SkillsComponent } from "./skills/skills.component";

import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { InterestsComponent } from './interests/interests.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    InterestsComponent,
    AchievementsComponent,
    CertificationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
