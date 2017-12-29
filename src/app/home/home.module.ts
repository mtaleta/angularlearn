import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

// import { HomeComponent } from './home.component';
import { HomeRouter } from './home.routes.module';
// import { SocialChannelComponent } from './social-channel/social-channel.component';
// import { SitestatComponent } from './sitestat/sitestat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRouter
  ],
  declarations: [
    // HomeComponent,
    // SocialChannelComponent,
    // SitestatComponent
  ]
})
export class HomeModule { }
