import { Component, OnInit, ViewChild } from '@angular/core';
import { MdMenuTrigger } from "@angular/material/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 //@ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  ngOnInit() {
  }
  
// someMethod() {
//     this.trigger.openMenu();
//   }
}

