import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {DummyComponent} from './dummy/dummy.component';
import {UserComponent} from './user/user.component';
import {BlogComponent} from './blog/blog.component';
import {DetailsBlogComponent} from './detailsBlog/detailsBlog.component';
import {UpdateBlogComponent} from './update-blog/update-blog.component';
import {SuppBlogComponent} from './supp-blog/supp-blog.component';
import {NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [
  {path: 'accueil', component: DummyComponent},
  {path: 'blog', component: BlogComponent},
  // {path: 'calendrier', component: DummyComponent},
  {path: 'signUp', component: UserComponent},
  {path: 'details/Blog/:id', component: DetailsBlogComponent},
  {path: 'Update/Blog/:id', component: UpdateBlogComponent},
  {path: 'Supp/Blog/:id', component: SuppBlogComponent},
  {path: 'Update/Blog/like/:like/:id', component: DummyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
