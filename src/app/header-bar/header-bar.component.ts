import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header-bar',
  templateUrl: 'header-bar.component.html',
  styleUrls: ['header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  @Input() isShowNavbar: boolean;
  @Output() onToggle = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  navbarToggle() {
    this.isShowNavbar = true;
    this.onToggle.emit(true);
    console.log(this.isShowNavbar)
  }

}
