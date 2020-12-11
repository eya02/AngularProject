import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogService} from '../Shared/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
  id;
  Blog;
  form: FormGroup;
  profilePicture: string = null;
  errorMsg: string;
  files: string = null;
  like;
  dislike;
etatlike;
  constructor(private fb: FormBuilder,
              private blogservice: BlogService,
              private route: ActivatedRoute,
              private router: Router) {

    this.form = this.fb.group({
      id: ['', Validators.required],
      titre: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      like: [''],
      dislike: [''],
      etatlike: [''],
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.blogservice.getBlogbyid(this.id).subscribe((result) => {
      this.Blog = result;
      this.form.patchValue(this.Blog);
      this.like = this.Blog.like;
      this.dislike = this.Blog.dislike;
      this.Blog.etatlike = this.etatlike;
      console.log(this.etatlike);
    });
  }
  submit() {

    this.blogservice
      .updateBlog(this.form.value, this.id)
      .subscribe(() => {

        this.router.navigate(['/accueil']);
      });

  }
  get titre(){
    return this.form.get('titre');
  }
  // tslint:disable-next-line:typedef
  get name(){
    return this.form.get('name');
  }
  // tslint:disable-next-line:typedef
  get type(){
    return this.form.get('type');
  }
  // tslint:disable-next-line:typedef
  get date(){
    return this.form.get('date');
  }
  // tslint:disable-next-line:typedef
  get description(){
    return this.form.get('description');
  }
  // tslint:disable-next-line:typedef
  get image(){
    return this.form.get('image');
  }
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
  handleProfilePictureInput(file) {
    this.getBase64(file[0])
      .subscribe(str => this.profilePicture = str);
  }
  getBase64(file): Observable<string> {
    return new Observable<string>(sub => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        sub.next(reader.result.toString());
        sub.complete();
      };
      reader.onerror = error => {
        sub.error(error);
      };
    });
  }
}
