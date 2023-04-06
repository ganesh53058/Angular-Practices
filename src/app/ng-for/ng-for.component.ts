import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  employees = [
    {name: "Ganesh", designation: "Angular Developer" },
    {name: "Kranthi", designation: "ReactJS Developer"},
    {name: "Vinay", designation: "VueJS Developer"},
    {name: "Jeevan", designation: "Java Developer"},
    {name: "Rajesh", designation: "ReactNative Developer"}
  ]

  ngOnInit(): void {
  }

}

