import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-about-view',
  templateUrl: 'about-view.component.html',
  styleUrls: ['about-view.component.css']
})
export class AboutViewComponent implements OnInit {
  @Output() onNavigate = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
     this.onNavigate.emit('关于');
  }

}
