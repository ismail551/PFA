import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDITuserComponent } from './edituser.component';

describe('EDITuserComponent', () => {
  let component: EDITuserComponent;
  let fixture: ComponentFixture<EDITuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EDITuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDITuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
