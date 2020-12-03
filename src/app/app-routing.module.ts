import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {DummyComponent} from './dummy/dummy.component';
import {UserComponent} from './user/user.component';
import {BlogComponent} from './blog/blog.component';

const routes: Routes = [
  {path: 'accueil', component: DummyComponent},
  {path: 'blog', component: BlogComponent},
  // {path: 'calendrier', component: DummyComponent},
  {path: 'signUp', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
