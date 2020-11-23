import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {DummyComponent} from './dummy/dummy.component';

const routes: Routes = [
  {path: 'accueil', component: DummyComponent},
  {path: 'blog', component: DummyComponent},
  {path: 'calendrier', component: DummyComponent},
  {path: 'signUp', component: DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
