import { Component, OnInit, Inject } from '@angular/core';
// 引入AuthService
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

 
  // 聲明變量,為AuthService
  // service: AuthService;

  // 在構造函數終將authservice注入到成員變量service中
  // constructor(private service: AuthService) {}
    // this.service = new AuthService();
  constructor(@Inject('auth') private service) {}


  // onClickMe(username, password){
  //   console.log('auth result is: ' + this.service.loginWithCredentials(this.username, this.password))
  //   // 調用 service方法
  //   // console.log('auth result is: ' + this.service.loginWithCredentials(username, password))
  //   console.log("username:" + this.username + "\n\r" 
  //     + "password:" + this.password);
  // }
  onSubmit(formValue) {
    console.log('auth result is: ' + 
    this.service.loginWithCredentials(formValue.login.username, formValue.login.password))    
  }

  ngOnInit() {
  }
}
