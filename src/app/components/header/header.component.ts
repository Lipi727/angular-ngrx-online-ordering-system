import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
 

  onSelectedFeature(feature:string){
    this.featureSelected.emit(feature);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
