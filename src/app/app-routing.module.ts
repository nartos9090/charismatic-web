import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {LandingComponent} from './components/pages-2/landing/landing.component'
import {HomeComponent} from './components/pages-2/home/home.component'
import {VideoComponent} from './components/pages-2/video/video.component'
import {CopywriterComponent} from './components/pages-2/copywriter/copywriter.component'
import {EditorComponent} from './components/pages-2/editor/editor.component'
import {VideoDetailComponent} from './components/pages-2/video/detail/video-detail.component'
import {CopywriterDetailComponent} from './components/pages-2/copywriter/detail/copywriter-detail.component'
import {
  EditorDetailGenerateComponent,
} from './components/pages-2/editor/detail/generate/editor-detail-generate.component'
import {EditorDetailComponent} from './components/pages-2/editor/detail/editor-detail.component'
import {PrivacyPolicyComponent} from './components/pages-2/privacy-policy/privacy-policy.component'
import {AccountDeletionComponent} from './components/pages-2/account-deletion/account-deletion.component'

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'account-deletion', component: AccountDeletionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'video', component: VideoComponent},
  {path: 'video/:video_id', component: VideoDetailComponent},
  {path: 'copywriter', component: CopywriterComponent},
  {path: 'copywriter/:project_id', component: CopywriterDetailComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'editor/:product_image_id', component: EditorDetailComponent},
  {path: 'editor/:product_image_id/generate', component: EditorDetailGenerateComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
