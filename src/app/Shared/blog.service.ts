import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../Models/Blog';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  tit  ='';

  constructor(private http: HttpClient, private router: Router) {
  }

  // tslint:disable-next-line:typedef
  getallblogs() {
    return this.http.get<Blog[]>('./assets/blog.json');
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

  updateLike(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/Blogs/' + id;
    return this.http.put(url, data);
  }

  // tslint:disable-next-line:typedef
  getallBlog() {
    return this
      .http.get<any>('http://localhost:3000/Blogs/');
  }

  addBlog(data: any): Observable<any> {
    const url = 'http://localhost:3000/Blogs/';
    window.open('http://localhost:3001/send', '_blank');
    return this.http.post(url, data);
  }
  search(q: string): Observable<any> {
    return this.http.get(
      'http://localhost:3000/' + 'Blogs?titre_like=' + q
    );
  }


  submit2(data , id) {
    this.updateLike(data , id ).subscribe(() => {
      this.router.navigateByUrl('/blog', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/accueil']);
      });
    }
);

  }
}
