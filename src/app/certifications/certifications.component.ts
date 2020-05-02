import { Component, OnInit } from "@angular/core";
import { Certification } from "./certification.model";

@Component({
  selector: "app-certifications",
  templateUrl: "./certifications.component.html",
  styleUrls: ["./certifications.component.css"],
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[];
  constructor() {}

  ngOnInit() {
    this.getCertifications();
  }

  getCertifications() {
    this.certifications = [
      {
        certificate: "NPTEL Programming in Java",
        about: "Scored 94%",
        certificate_url: "#",
      },
      {
        certificate: "NPTEL DBMS",
        about: "Scored 86%",
        certificate_url: "#",
      },
    ];
  }
}
