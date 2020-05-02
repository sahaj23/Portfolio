import { Component, OnInit } from "@angular/core";
import { Skill } from "./skill.model";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  constructor() {}

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.skills = [
      {
        url: "http://127.0.0.1:8080/api/skills/2/",
        skill: "Java",
        rate: 9,
        user_profile: "http://127.0.0.1:8080/api/signup/8/",
      },
      {
        url: "http://127.0.0.1:8080/api/skills/3/",
        skill: "Spring Boot",
        rate: 5,
        user_profile: "http://127.0.0.1:8080/api/signup/8/",
      },
      {
        url: "http://127.0.0.1:8080/api/skills/4/",
        skill: "Web development",
        rate: 8,
        user_profile: "http://127.0.0.1:8080/api/signup/8/",
      },
      {
        url: "http://127.0.0.1:8080/api/skills/5/",
        skill: "SQL",
        rate: 7,
        user_profile: "http://127.0.0.1:8080/api/signup/8/",
      },
    ];
  }
}
