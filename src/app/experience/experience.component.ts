import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  experiences: Array<Object>;

  ngOnInit() {
    this.getExperience();
  }

  getExperience() {
    this.experiences = [
      {
          "url": "http://127.0.0.1:8080/api/work-experience/1/",
          "role": "Software Developer",
          "company": "Google",
          "address": "some address",
          "about": "Made contibution in the field of Google Cloud Platform. Managed a team of Cloud Develoeprs. Worked on technologies like angular, cloud, kubernetes",
          "company_url": "http://www.google.com/",
          "joining_date": "2020-04-28",
          "to_date": "Present",
          "currently_working": true,
          "user_profile": "http://127.0.0.1:8080/api/signup/1/"
      },
      {
        "url": "http://127.0.0.1:8080/api/work-experience/1/",
        "role": 'Web Developer',
        "company": "Facebook",
        "address": "some address",
        "about": "Worked as a lead web developer in Facebook. Lead the team of UI developers and made open source contribution in the field of react.",
        "company_url": "http://facebook.com/",
        "joining_date": "2016-04-28",
        "to_date": "2018-05-25",
        "currently_working": false,
        "user_profile": "http://127.0.0.1:8080/api/signup/1/"
      }
    ];
  }

}
