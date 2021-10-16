import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoriComponent } from './saori.component';

describe('SaoriComponent', () => {
  let component: SaoriComponent;
  let fixture: ComponentFixture<SaoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
