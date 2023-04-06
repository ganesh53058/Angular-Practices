import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  voters = [
    {name: "Ganesh", area: "Nellore", age: 25},
    {name: "Raja", area: "Kadapa", age: 16},
    {name: "Thanmay", area: "Ongole", age: 49},
    {name: "Yuvaraj", area: "Chittor", age: 14},
    {name: "Kranthi", area: "Tirupati", age: 12}
  ]

  ngOnInit(): void {
  }

}
