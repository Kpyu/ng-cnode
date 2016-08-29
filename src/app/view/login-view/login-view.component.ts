import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  @Output() onNavigate = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    debugger
    this.onNavigate.emit('登录');
  }

}
