import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsList2Component } from './authors-list2.component';

describe('AuthorsList2Component', () => {
  let component: AuthorsList2Component;
  let fixture: ComponentFixture<AuthorsList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
