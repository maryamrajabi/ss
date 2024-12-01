import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesSettingsComponent } from './profiles-settings.component';

describe('ProfilesSettingsComponent', () => {
  let component: ProfilesSettingsComponent;
  let fixture: ComponentFixture<ProfilesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
