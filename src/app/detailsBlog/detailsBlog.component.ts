import { Component, OnInit } from '@angular/core';
import {BlogService} from '../Shared/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-details.com',
  templateUrl: './detailsBlog.component.html',
  styleUrls: ['./detailsBlog.component.css']
})

export class DetailsBlogComponent implements OnInit {
Blogs;
id;
name;
titre;
date;
description;
like;
dislike;
image;
type;

  constructor(private serviceblog: BlogService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this
      .serviceblog
      .getBlogbyid
      (this.activatedRoute.snapshot.params['id'])
      .subscribe(
        data => {
          this.Blogs = data;
          console.log(this.Blogs);
          this.id = this.Blogs.id;
          this.name = this.Blogs.name;
          this.titre = this.Blogs.titre;
          this.date = this.Blogs.date;
          this.description = this.Blogs.description;
          this.like = this.Blogs.like;
          this.dislike = this.Blogs.dislike;
          this.image = this.Blogs.image;
          this.type = this.Blogs.type;





        }, error => {

          console.log(error);
          alert('id not found');
        }
      )
    ;
  }


}
