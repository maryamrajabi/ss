import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionPoliciesComponent } from './protection-policies.component';

describe('ProtectionPoliciesComponent', () => {
  let component: ProtectionPoliciesComponent;
  let fixture: ComponentFixture<ProtectionPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtectionPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectionPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
