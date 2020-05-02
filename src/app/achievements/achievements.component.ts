import { Component, OnInit } from "@angular/core";
import { Achievement } from "./achievement.model";

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",
  styleUrls: ["./achievements.component.css"],
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement[];
  constructor() {}

  ngOnInit() {
    this.getAchievements();
  }
  getAchievements() {
    this.achievements = [
      {
        achievement: "Qualified for ACM ICPC Regionals",
      },
      {
        achievement: "Coordinated various events hosted by college.",
      },
      {
        achievement: "4 start in Codechef.",
      },
    ];
  }
}
