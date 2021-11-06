import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZimComponent } from './zim.component';

describe('ZimComponent', () => {
  let component: ZimComponent;
  let fixture: ComponentFixture<ZimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
