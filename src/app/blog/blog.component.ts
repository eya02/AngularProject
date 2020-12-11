import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BlogService} from '../Shared/blog.service';
import {Router} from '@angular/router';
import {UserService} from '../Shared/user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  myForm: FormGroup;
  profilePicture: string = null;
  errorMsg: string;
  files: string = null;
  Users;
  constructor(private fb: FormBuilder, public Blogservice: BlogService , public Userservice: UserService, private router: Router) {
    this.myForm = this.fb.group({
      id: [''],
      titre: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      like: ['0'],
      dislike: ['0'],
      etatlike: ['0']
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {
    this.Userservice.getallUser()
      .subscribe(
        (data) => {
          this.Users = data;
          console.log(this.Users);
        }
      );

  }
  // tslint:disable-next-line:typedef
  submit(form) {
        console.log('eayaaaa');
        this.Blogservice.addBlog(form)
      .subscribe(() => {

          this.router.navigate(['/accueil']);
        },
        (error) => {
          switch (error.status) {
            case 404: {
              console.log('Not Found');
              break;
            }
            case 403: {
              console.log('Access Denied');
              break;
            }
            case 500: {
              console.log('Internal Server Error: ');
              break;
            }


          }
        }
      );
  }
  get titre(){
    return this.myForm.get('titre');
  }
  // tslint:disable-next-line:typedef
  get name(){
    return this.myForm.get('name');
  }
  // tslint:disable-next-line:typedef
  get type(){
    return this.myForm.get('type');
  }
  // tslint:disable-next-line:typedef
  get date(){
    return this.myForm.get('date');
  }
  // tslint:disable-next-line:typedef
  get description(){
    return this.myForm.get('description');
  }
  // tslint:disable-next-line:typedef
  get image(){
    return this.myForm.get('image');
  }
  // tslint:disable-next-line:typedef
  get like(){
    return this.myForm.get('like');
  }
  // tslint:disable-next-line:typedef
  get dislike(){
    return this.myForm.get('dislike');
  }
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
