import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-about-view',
  templateUrl: 'about-view.component.html',
  styleUrls: ['about-view.component.css']
})
export class AboutViewComponent implements OnInit {
  public title = "关于";
  constructor() { }
  ngOnInit() {
  }

}
