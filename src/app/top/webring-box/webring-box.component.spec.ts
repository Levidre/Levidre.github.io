import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebringBoxComponent } from './webring-box.component';

describe('WebringBoxComponent', () => {
  let component: WebringBoxComponent;
  let fixture: ComponentFixture<WebringBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebringBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebringBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
