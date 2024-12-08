import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionSettingsComponent } from './protection-settings.component';

describe('ProtectionSettingsComponent', () => {
  let component: ProtectionSettingsComponent;
  let fixture: ComponentFixture<ProtectionSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtectionSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectionSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
