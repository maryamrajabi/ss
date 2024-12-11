import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutComponentComponent } from './base-layout-component.component';

describe('BaseLayoutComponentComponent', () => {
  let component: BaseLayoutComponentComponent;
  let fixture: ComponentFixture<BaseLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseLayoutComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
