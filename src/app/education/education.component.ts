import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  colleges: Array<Object>;

  ngOnInit() {
    this.getEducation();
  }

  getEducation() {
    this.colleges = [
      {
        "url": "http://127.0.0.1:8080/api/education/1/",
        "college_name": "LNCT Group of College",
        "college_address": "some address",
        "grade": "9 CGPA",
        "major": "Computer Science of Technology",
        "degree": "B.Tech",
        "from_date": "2016-04-28",
        "to_date": "2020-04-28",
        "user_profile": "http://127.0.0.1:8080/api/signup/1/"
      },
      {
        "url": "http://127.0.0.1:8080/api/education/1/",
        "college_name": "Stanford University",
        "college_address": "",
        "grade": "4.5 GPA",
        "major": "Artificial Intelligence",
        "degree": "MS",
        "from_date": "2020-04-28",
        "to_date": "Present",
        "user_profile": "http://127.0.0.1:8080/api/signup/1/"
      },
    ];
  }
}
