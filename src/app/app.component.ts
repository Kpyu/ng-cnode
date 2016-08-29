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
  public title: string = '全部';

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
  onActivate($event) {
    if ($event.title) {
      this.title = $event.title;
    }
    if ($event.tab) {
      switch ($event.tab) {
        case 'all':
          this.title = '全部';
          break;
        case 'good':
          this.title = '精华';
          break;
        case 'share':
          this.title = '分享';
          break;
        case 'ask':
          this.title = '问答';
          break;
        case 'job':
          this.title = '招聘';
          break;
        case 'message':
          this.title = '消息';
          break;
        case 'about':
          this.title = '关于';
          break;
        case 'perinfo':
          this.title = '个人信息';
          break;
        case 'newtopic':
          this.title = '发帖';
          break;
        default:
          this.title = '全部';
          break;
      }
    }
  }
  getUnreadCount() {
    this.apiService.unreadCount(this.accesstoken)
  }

  constructor(private apiService: DataServiceService) { }
  ngOnInit() {

  }
}