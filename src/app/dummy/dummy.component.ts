import { Component, OnInit , Output, Input, EventEmitter } from '@angular/core';
import {BlogService} from '../Shared/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from '../Models/Blog';
import {UserService} from '../Shared/user.service';
@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})


export class DummyComponent implements OnInit {
  Blogs;
  Users;
  searchvalue;
  id;
  vaar;
  cheminImage = 'img-1.png';
  inputVal = '' ;

  @Input()val: string;

vars = '';
  // tslint:disable-next-line:max-line-length
  constructor(private serviceblog: BlogService, private serviceuser: UserService, private activatedRoute: ActivatedRoute ,  private router: Router) {
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
    this.serviceuser.getallUser()
       .subscribe(
         (data) => {

           this.Users = data;
           console.log(this.Users);
         },
         errors => {
           console.log(errors);
           alert(errors.status);
         },
       );

  }
  onsearch(){
    this.serviceblog.search(this.searchvalue).subscribe(
      (data) => {
        if ( this.searchvalue != null) {
          this.Blogs = data;
        }
      }
    );
  }
// tslint:disable-next-line:typedef
getType(k: string)
{
    this.vars = k;
    console.log(k);
}
// tslint:disable-next-line:typedef
Addlike(id)
{

  this.serviceblog.getBlogbyid
  (id)
    .subscribe(
      data => {
        this.vaar = data;
        this.id = this.vaar.id;

        console.log('this.vaar');

        this.vaar.like++;
        this.vaar.etatlike = 1;
        console.log(this.vaar.like);

        this.serviceblog
          .submit2(this.vaar , this.id);
      }, error => {

        console.log(error);
        alert('id not found');
      }
    )
  ;



}
  // tslint:disable-next-line:typedef
  Adddislike(id)
  {
    this.serviceblog.getBlogbyid
    (id)
      .subscribe(
        data => {
          this.vaar = data;
          this.id = this.vaar.id;
          console.log('this.vaar');
          this.vaar.dislike++;
          this.vaar.etatlike = 2;

          console.log(this.vaar.dislike);
          this.serviceblog
            .updateLike(this.vaar, this.id)
            .subscribe(() => {
              this.router.navigateByUrl('/blog', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/accueil']);
              });
            });
        }, error => {

          console.log(error);
          alert('id not found');
        }
      )
    ;


  }


}
