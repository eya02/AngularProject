import { Component, OnInit , Output, Input, EventEmitter } from '@angular/core';
import {BlogService} from '../Shared/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from '../Models/Blog';
@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})


export class DummyComponent implements OnInit {
  Blogs;
  id;
like;
  cheminImage = 'img-1.png';
@Input()val: string;

vars: string;
  constructor(private serviceblog: BlogService, private activatedRoute: ActivatedRoute) {
    }


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
getType(k: string)
{
    this.vars = k;
    console.log(k);
}
// tslint:disable-next-line:typedef
Addlike(id, like)
{
  this.serviceblog.getBlogbyid
    (id)
    .subscribe(
      data => {
        this.Blogs = data;
        console.log(this.Blogs);
        this.id = this.Blogs.id;
        like += 1;
        like = this.Blogs.like;
        this.serviceblog
          .updateLike(like, this.id)
          .subscribe(() => {

          });
      }, error => {

        console.log(error);
        alert('id not found');
      }
    )
  ;


}

}
