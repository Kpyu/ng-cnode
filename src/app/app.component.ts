import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './api/data-service.service'
export class Hero {
  id: number;
  name: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataServiceService]
})
export class AppComponent implements OnInit {
  public isShowNavbar: boolean = false;
  public isShowConfirm: boolean = false;
  public isLogin: boolean;
  private accesstoken: string;
  public title:string = '全部';

  showConfirm() {
    this.isShowConfirm = !this.isShowConfirm;
  }
  /**
   * 监听头部点击
   * @param {boolean} toggle
   */
  onToggle(toggle: boolean) {
    this.isShowNavbar = toggle;
  }
  onNavigate(tab: string) {
    this.title = tab;
  }
  getUnreadCount() {
    this.apiService.unreadCount(this.accesstoken)
  }

  constructor(private apiService: DataServiceService) { }
  ngOnInit() {

  }
}