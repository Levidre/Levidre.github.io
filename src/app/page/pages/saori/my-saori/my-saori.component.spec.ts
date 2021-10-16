import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySaoriComponent } from './my-saori.component';

describe('MySaoriComponent', () => {
  let component: MySaoriComponent;
  let fixture: ComponentFixture<MySaoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySaoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySaoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
