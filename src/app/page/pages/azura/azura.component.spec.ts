import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzuraComponent } from './azura.component';

describe('AzuraComponent', () => {
  let component: AzuraComponent;
  let fixture: ComponentFixture<AzuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
