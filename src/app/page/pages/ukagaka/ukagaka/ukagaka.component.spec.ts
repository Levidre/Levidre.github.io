import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkagakaComponent } from './ukagaka.component';

describe('UkagakaComponent', () => {
  let component: UkagakaComponent;
  let fixture: ComponentFixture<UkagakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkagakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UkagakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
