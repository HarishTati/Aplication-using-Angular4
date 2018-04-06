import { Component, OnInit } from '@angular/core';
import { ModuleWithComponentFactories } from '@angular/core/src/linker/compiler';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
