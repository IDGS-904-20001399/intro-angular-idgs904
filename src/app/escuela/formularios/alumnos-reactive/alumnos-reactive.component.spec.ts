import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosReactiveComponent } from './alumnos-reactive.component';

describe('AlumnosReactiveComponent', () => {
  let component: AlumnosReactiveComponent;
  let fixture: ComponentFixture<AlumnosReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosReactiveComponent]
    });
    fixture = TestBed.createComponent(AlumnosReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
