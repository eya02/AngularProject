import { Component, OnInit , Output, Input, EventEmitter } from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from '../Models/Blog';
@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})


export class DummyComponent implements OnInit {
  Blogs;
  cheminImage = 'img-1.png';

like;

  constructor(private serviceblog: BlogService, private activatedRoute: ActivatedRoute) {
    }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.serviceblog.getallBlog()
      .subscribe(
        (data) => {
          this.Blogs = data;
          console.log(this.Blogs);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );

  }

  // tslint:disable-next-line:typedef
  addlike(id)
  {
    this.serviceblog.getBlogbyid
      (id)
      .subscribe(
        data => {
          this.Blogs = data;
          console.log(this.Blogs);
          id = this.Blogs.id;
          this.like += this.Blogs.like;
        }, error => {

          console.log(error);
          alert('id not found');
        }
      )
    ;
  }


}
