import { Component, OnInit } from '@angular/core';
import {BlogService} from '../Shared/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-supp-blog',
  templateUrl: './supp-blog.component.html',
  styleUrls: ['./supp-blog.component.css']
})
export class SuppBlogComponent implements OnInit {

  constructor(private seviceBlog: BlogService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.seviceBlog
      .deleteBlog(
        this.activatedRoute.snapshot.params['id'])
      .subscribe(data => this.router.navigate(['/accueil']));

  }

}
