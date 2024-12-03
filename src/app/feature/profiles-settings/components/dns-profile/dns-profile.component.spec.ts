import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnsProfileComponent } from './dns-profile.component';

describe('DnsProfileComponent', () => {
  let component: DnsProfileComponent;
  let fixture: ComponentFixture<DnsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DnsProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
