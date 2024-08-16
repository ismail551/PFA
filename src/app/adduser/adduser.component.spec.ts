import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDuserComponent } from './adduser.component';

describe('ADDuserComponent', () => {
  let component: ADDuserComponent;
  let fixture: ComponentFixture<ADDuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADDuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADDuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
