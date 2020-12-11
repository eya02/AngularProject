import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {User} from '../Models/User';
import {UserService} from '../Shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userr : string='' ;
pass : string='' ;
users;
vaar;
id ;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, public UserService: UserService , private router: Router) {
  }

    ngOnInit(): void {
      this.UserService.getallUser()
        .subscribe(
          (data) => {

            this.users = data;
            console.log(this.users);
          },
          errors => {
            console.log(errors);
            alert(errors.status);
          },
        );
  }
   onSubmit(form){

    const {id, username , email , password , repassword} = form.value;
    console.log(form.value);
    const newUser = new User(id, username, email, password);
    this.UserService.submit(newUser);

}
  onSubmit2(form2){
let k=0;
    let h: number;

    h = this.users.length;
    let c=0;

    for (let i = 0; i < h; i++) {
// tslint:disable-next-line:triple-equals
      if (this.users[i].username == form2.value.email) {
        k==i;
        console.log(k);
        if(this.users[k].password == form2.value.password){
          this.Login(this.users[k].id);
          c=1;
          this.router.navigate(['/accueil']) .then(() => {
            window.location.reload();
          });

        }
      }
    }
   console.log(form2.value.email);
   console.log(form2.value.password);
   return c;


  }

  Login(id)
  {
    this.UserService.getUserbyid
    (id)
      .subscribe(
        data => {
          this.vaar = data;
          this.id = this.vaar.id;

          console.log('this.vaar');

          this.vaar.connected = 1;
          console.log(this.vaar.connected);

          this.UserService
            .submit2(this.vaar , this.id);
        }, error => {

          console.log(error);
          alert('id not found');
        }
      )
    ;



  }
}
