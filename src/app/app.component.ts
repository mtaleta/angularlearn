import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}
  // MatIconRegistery.addSvgIconInNamespace有三個參數：
  // namespace：icon的namespace，方便用來分類不同的icons，也能夠避免名稱衝突
  // iconName：給予這個icon一個名稱
  // url：一個安全的圖片來源

  // MatIconRegistery.registerFontClassAlias有兩個參數：
  // alias：原來icon font class的別名，例如FontAwesome都會在class裡面加上fa之後才加上fa-*，這裡要設定的就是fa的別名。
  // className：原來icon font的主要class，以FontAwesome來說也就是fa
  ngOnInit() {
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg'));
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
