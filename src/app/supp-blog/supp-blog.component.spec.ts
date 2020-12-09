import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppBlogComponent } from './supp-blog.component';

describe('SuppBlogComponent', () => {
  let component: SuppBlogComponent;
  let fixture: ComponentFixture<SuppBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
