import { Component, OnInit } from "@angular/core";
import { About } from "./about.model";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  about: About;
  constructor() {}

  ngOnInit() {
    this.getAbout();
  }

  getAbout() {
    this.about = {
      url: "http://127.0.0.1:8080/api/about/5/",
      user_profile: "http://127.0.0.1:8080/api/signup/8/",
      first_name: "Sahaj",
      middle_name: "",
      last_name: "Khandelwal",
      address: "57, Kalpana Nagar, Bhopal",
      about:
        // tslint:disable-next-line: max-line-length
        "I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
      email: "khandelwalsahaj36@gmail.com",
      mobile: "+91 9721684699",
      highlights: "Full stack developer",
      linkedIn_link: "https://www.linkedin.com/in/sahajkhandelwal/",
      facebook_link: "*",
      github_link: "#",
    };
  }
}
