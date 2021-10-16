import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevidreComponent } from './levidre.component';

describe('LevidreComponent', () => {
  let component: LevidreComponent;
  let fixture: ComponentFixture<LevidreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevidreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevidreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
