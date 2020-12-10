import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {User} from '../Models/User';
import {UserService} from '../Shared/user.service';
import {BlogService} from '../Shared/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, public UserService: UserService , private router: Router) {
  }

    ngOnInit(): void {
  }
   onSubmit(form){

    const {id, username , email , password , repassword} = form.value;
    console.log(form.value);
    const newUser = new User(id, username, email, password);
    this.UserService.submit(newUser);

}
}
