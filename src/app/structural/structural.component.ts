import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
 public status= false;
 public Colors = ["red","blue","green","yellow","Orange"];
 public myChoice = "one";
 name:any;
 button(){
  this.myChoice= this.name;
 }
}
