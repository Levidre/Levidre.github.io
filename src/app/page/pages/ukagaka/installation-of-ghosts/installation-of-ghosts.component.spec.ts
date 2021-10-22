import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationOfGhostsComponent } from './installation-of-ghosts.component';

describe('InstallationOfGhostsComponent', () => {
  let component: InstallationOfGhostsComponent;
  let fixture: ComponentFixture<InstallationOfGhostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallationOfGhostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationOfGhostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
