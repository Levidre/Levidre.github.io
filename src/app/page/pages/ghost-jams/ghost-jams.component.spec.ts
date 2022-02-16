import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostJamsComponent } from './ghost-jams.component';

describe('GhostJamsComponent', () => {
  let component: GhostJamsComponent;
  let fixture: ComponentFixture<GhostJamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostJamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostJamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
