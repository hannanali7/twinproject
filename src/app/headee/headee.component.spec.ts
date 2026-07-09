import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadeeComponent } from './headee.component';

describe('HeadeeComponent', () => {
  let component: HeadeeComponent;
  let fixture: ComponentFixture<HeadeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadeeComponent]
    });
    fixture = TestBed.createComponent(HeadeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
