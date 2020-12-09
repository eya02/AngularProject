import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../Models/Blog';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private router: Router) {
  }
  // tslint:disable-next-line:typedef
  getallblogs() {
    return this .http.get<Blog[]>('./assets/blog.json');
  }
  // tslint:disable-next-line:typedef
  getBlogbyid(id: number) {
    return this.http.get('http://localhost:3000/Blogs/' + id);
  }
  // tslint:disable-next-line:typedef
  deleteBlog(id: number) {
    return this.http.delete('http://localhost:3000/Blogs/' + id);
  }

  updateBlog(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/Blogs/' + id;
    return this.http.put(url, data);
  }
  updateLike(like: string, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/Blogs/' + id;
    return this.http.put(url, like);
  }
  // tslint:disable-next-line:typedef
  getallBlog() {

    return this
      .http.get<any>('http://localhost:3000/Blogs/');
  }
  addBlog(data: any): Observable<any> {
    const url = 'http://localhost:3000/Blogs/';
    return this.http.post(url, data);
  }

  submit(form) {

    this.addBlog(form)
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
}

