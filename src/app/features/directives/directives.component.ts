import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
 
  displayName:boolean=false;
  createHeadig(){
  this.displayName=true
  }
  ngOnInit(): void {
  }

}
