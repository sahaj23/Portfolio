import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Interest } from "./interest.model";

@Component({
  selector: "app-interests",
  templateUrl: "./interests.component.html",
  styleUrls: ["./interests.component.css"],
})
export class InterestsComponent implements OnInit {
  interests: Interest[];
  constructor() {}

  ngOnInit() {
    this.getInterests();
  }
  getInterests() {
    this.interests = [
      {
        interest: "Gymming",
      },
      {
        interest: "Fitness nutrition",
      },
      {
        interest: "Learning new stuff",
      },
      {
        interest: "Socializing",
      },
      {
        interest: "Traveling",
      },
      {
        interest: "Cricket",
      },
    ];
  }
}
