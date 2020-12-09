import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from './app-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { DetailsBlogComponent } from './detailsBlog/detailsBlog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { SuppBlogComponent } from './supp-blog/supp-blog.component';
import { TypeBlogComponent } from './type-blog/type-blog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    UserComponent,
    BlogComponent,
    DetailsBlogComponent,
    UpdateBlogComponent,
    SuppBlogComponent,
    TypeBlogComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatDatepickerModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    CommonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
