import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoriCreationComponent } from './saori-creation.component';

describe('SaoriCreationComponent', () => {
  let component: SaoriCreationComponent;
  let fixture: ComponentFixture<SaoriCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaoriCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaoriCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
