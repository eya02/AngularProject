import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBlogComponent } from './type-blog.component';

describe('TypeBlogComponent', () => {
  let component: TypeBlogComponent;
  let fixture: ComponentFixture<TypeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
