import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtpProfileComponent } from './ntp-profile.component';

describe('NtpProfileComponent', () => {
  let component: NtpProfileComponent;
  let fixture: ComponentFixture<NtpProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtpProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
