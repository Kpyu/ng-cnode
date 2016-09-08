import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataServiceService } from '../../api/data-service.service'
@Component({
  moduleId: module.id,
  selector: 'app-login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  public title = "登录";
  public model:any = {};
  constructor(private api:DataServiceService) { }
//  af708afd-582b-4139-b06f-4cc65c7e67ef
  ngOnInit() {
  }
  doLogin(){
    debugger
    this.api.validateAccessToken({
      accesstoken:this.model.accessToken
    }).then(result =>{
      var data = result.json();
      localStorage.setItem('loginUser',JSON.stringify({
        loginname:data.loginname,
        user_id: data.id,
        accesstoken: this.model.accessToken,
        avatar_url: data.avatar_url
      }))
      this.api.checkLogin(localStorage.getItem('loginUser'));
    })
    .catch(Error=>{
      console.log(Error.json());
    })
  }
}
