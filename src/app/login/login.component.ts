import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../domain/entities';
// // 引入AuthService
// import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  auth: Auth;
 
  // 聲明變量,為AuthService
  // service: AuthService;

  // 在構造函數終將authservice注入到成員變量service中
  // constructor(private service: AuthService) {}
    // this.service = new AuthService();
  constructor(
    @Inject('auth')
    private service,
    private router: Router
  ) {}

  ngOninit(){
    
  }
  // onClickMe(username, password){
  //   console.log('auth result is: ' + this.service.loginWithCredentials(this.username, this.password))
  //   // 調用 service方法
  //   // console.log('auth result is: ' + this.service.loginWithCredentials(username, password))
  //   console.log("username:" + this.username + "\n\r" 
  //     + "password:" + this.password);
  // }
  onSubmit(formValue) {
  this.service
    .loginWithCredentials(formValue.login.username, formValue.login.password)
    .then(auth => {
      let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
      if(!auth.hasError){
        this.router.navigate([redirectUrl]);
        localStorage.removeItem('redirectUrl');
      } else {
        this.auth = Object.assign({}, auth);
      }
    });
  }
  //   console.log('auth result is: ' + 
  //   this.service.loginWithCredentials(formValue.login.username, formValue.login.password))    
  // }

}
