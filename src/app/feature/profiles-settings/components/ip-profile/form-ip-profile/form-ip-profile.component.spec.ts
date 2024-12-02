import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIpProfileComponent } from './form-ip-profile.component';

describe('FormIpProfileComponent', () => {
  let component: FormIpProfileComponent;
  let fixture: ComponentFixture<FormIpProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormIpProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
