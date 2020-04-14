import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveScreenComponent } from './responsive-screen.component';

describe('ResponsiveScreenComponent', () => {
  let component: ResponsiveScreenComponent;
  let fixture: ComponentFixture<ResponsiveScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
