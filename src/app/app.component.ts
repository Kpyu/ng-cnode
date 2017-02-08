import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from './api/data-service.service';
import { Subscription }   from 'rxjs/Subscription';
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
export class AppComponent implements OnInit, OnDestroy {
  public isShowNavbar: boolean = false;
  public isShowConfirm: boolean = false;
  public isLogin: boolean;
  public loginUserData: any;
  private accesstoken: string;
  public title: string = '全部';
  subscription: Subscription;
  loginSubscript: Subscription;
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

  constructor(private apiService: DataServiceService) {
    // this.subscription =  apiService.title$.subscribe( result=>{
    //   debugger
    //   console.log(result);
    // })
  }
  ngOnInit() {
    const self:AppComponent = this;
    this.isLogin = JSON.parse(localStorage.getItem('loginUser')) && true;
    debugger
    this.loginUserData = JSON.parse(localStorage.getItem('loginUser'));
    this.subscription =  this.apiService.title$.subscribe( result=>{
      console.log(result);
      self.title = result;
    })
    this.loginSubscript = this.apiService.login$.subscribe(result=>{
      this.isLogin = true;
      debugger
      this.loginUserData = result;
    })

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.loginSubscript.unsubscribe();
  }
}
