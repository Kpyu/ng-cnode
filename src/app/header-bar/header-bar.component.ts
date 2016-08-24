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
  @Input() tab: string;
  @Output() onToggle = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.router)
    debugger;
    this.route.params.subscribe((params: Params) => {
      // debugger;
      console.log(params['tab']);
    });
  }
  navbarToggle() {
    this.isShowNavbar = true;
    this.onToggle.emit(true);
  }

}
