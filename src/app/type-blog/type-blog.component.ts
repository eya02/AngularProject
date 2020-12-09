import { Component, OnInit ,Output,Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-type-blog',
  templateUrl: './type-blog.component.html',
  styleUrls: ['./type-blog.component.css']
})
export class TypeBlogComponent implements OnInit {
@Output()send = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
clickOn(i: string){
    this.send.emit(i);
    //console.log(i);
  }}
