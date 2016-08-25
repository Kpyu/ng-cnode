import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-header-bar',
  templateUrl: 'header-bar.component.html',
  styleUrls: ['header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  @Input() isShowNavbar: boolean;
  @Input() title: string;
  @Output() onToggle = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }
  navbarToggle() {
    this.isShowNavbar = true;
    this.onToggle.emit(true);
  }

}
