import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { TeamComponent } from './components/common/team/team.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { OverviewComponent } from './components/common/overview/overview.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { AppScreenshotsComponent } from './components/common/app-screenshots/app-screenshots.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { AboutComponent } from './components/common/about/about.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import {LandingComponent} from './components/pages-2/landing/landing.component'
import {NavbarLandingComponent} from './components/common/navbar-landing/navbar-landing.component'
import {HomeComponent} from './components/pages-2/home/home.component'
import {VideoComponent} from './components/pages-2/video/video.component'
import {CopywriterComponent} from './components/pages-2/copywriter/copywriter.component'
import {EditorComponent} from './components/pages-2/editor/editor.component'
import {VideoDetailComponent} from './components/pages-2/video/detail/video-detail.component'
import {CopywriterDetailComponent} from './components/pages-2/copywriter/detail/copywriter-detail.component'
import {
  EditorDetailGenerateComponent
} from './components/pages-2/editor/detail/generate/editor-detail-generate.component'
import {EditorDetailComponent} from './components/pages-2/editor/detail/editor-detail.component'
import {PrivacyPolicyComponent} from './components/pages-2/privacy-policy/privacy-policy.component'
import {AccountDeletionComponent} from './components/pages-2/account-deletion/account-deletion.component'
import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login'

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    AccountDeletionComponent,
    NavbarLandingComponent,
    NavbarComponent,
    SubscribeComponent,
    LandingComponent,
    HomeComponent,
    VideoComponent,
    VideoDetailComponent,
    CopywriterComponent,
    CopywriterDetailComponent,
    EditorComponent,
    EditorDetailComponent,
    EditorDetailGenerateComponent,
    PrivacyPolicyComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    ContactComponent,
    BlogComponent,
    AppDownloadComponent,
    TeamComponent,
    FaqComponent,
    PricingComponent,
    OverviewComponent,
    TestimonialsComponent,
    AppScreenshotsComponent,
    FeaturesComponent,
    AboutComponent,
    FunfactsComponent,
    HowItWorksComponent,
    BlogDetailsComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '486443363784-uc5rftc2prusqmgk1jdn0kl399ua1a4i.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
