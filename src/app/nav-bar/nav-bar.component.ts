import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public navSet: Array<any> = NAVS.navSet;

  public currentNav: string = NAVS.nav;


  constructor() { }

  ngOnInit() {
  }

}

const NAVS: any  = {
  nav: 1,
  navSet: [
    [
      {
        icon: '&#xe602;',
        name: '全部',
        view: 'list',
        tab: 'all'
      }, {
        icon: '&#xe605;',
        name: '精华',
        view: 'list',
        tab: 'good'
      }, {
        icon: '&#xe600;',
        name: '分享',
        view: 'list',
        tab: 'share'
      }, {
        icon: '&#xe608;',
        name: '问答',
        view: 'list',
        tab: 'ask'
      }, {
        icon: '&#xe606;',
        name: '招聘',
        view: 'list',
        tab: 'job'
      }],
    [{
      icon: '&#xe607;',
      name: '消息',
      view: 'message'
    }, {
        icon: '&#xe608;',
        name: '关于',
        view: 'about'
      }],
    [{
      icon: '&#xe608;',
      name: '个人信息',
      view: 'perinfo'
    }, {
        icon: '&#xe608;',
        name: '发帖',
        view: 'newtopic'
      }]]
}