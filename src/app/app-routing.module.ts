import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './views/home/home.component';
import { PostsComponent } from './views/posts/posts.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { SigninComponent } from './views/identity/views/signin/signin.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }]
}, {
  path: '',
  component: FullwidthComponent,
  children: [
    {
      path: 'signin',
      component: SigninComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
