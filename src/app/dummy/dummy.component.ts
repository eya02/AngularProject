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
  vaar;
  cheminImage = 'img-1.png';
  inputVal = '' ;

  @Input()val: string;

vars = '';
  constructor(private serviceblog: BlogService, private activatedRoute: ActivatedRoute ,  private router: Router) {
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
