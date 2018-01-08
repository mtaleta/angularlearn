import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Auth, Image } from '../domain/entities';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username = '';
  password = '';
  auth: Auth;
  slides: Image[] = [];
  photo = '/assets/login_default_bg.jpg';
  subscription: Subscription;

  constructor(
    @Inject('auth') private service, 
    @Inject('bing') private bingService,
    private router: Router) { 
      this.bingService.getImageUrl()
        .subscribe((images: Image[]) => {
          this.slides = [...images];
          this.rotateImages(this.slides);
        });
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  rotateImages(arr: Image[]){
    const length = arr.length
    let i = 0;
    setInterval(() => {
      i = (i + 1) % length;
      this.photo = this.slides[i].contentUrl;
    }, 4000)
  }

  ngOnInit() {
  }

  onSubmit(){
    this.service
      .loginWithCredentials(this.username, this.password)
      .subscribe(auth => {
        this.auth = Object.assign({}, auth);
        if(!auth.hasError){
          this.router.navigate(['todo']);
        }
      });
  }

}
