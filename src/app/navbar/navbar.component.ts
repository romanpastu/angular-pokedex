import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onUsersClick(feature: string){
    
    this.featureSelected.emit(feature);
  }

  onPokemonClick(feature: string){
    this.featureSelected.emit(feature);
  }
}
