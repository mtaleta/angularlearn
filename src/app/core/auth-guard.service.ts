import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //取得訪問的URL
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    //登錄放行
    if (localStorage.getItem('userId') !== null) {
      return true;
    }
    //儲存要訪問的url到本地端
    localStorage.setItem('redirectUrl', url);
    //導航到登錄頁
    this.router.navigate(['/logins']);
    //返回false 取消導航
    return false;
  }
}
