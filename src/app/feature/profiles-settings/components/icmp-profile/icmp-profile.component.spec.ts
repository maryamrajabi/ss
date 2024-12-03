import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcmpProfileComponent } from './icmp-profile.component';

describe('IcmpProfileComponent', () => {
  let component: IcmpProfileComponent;
  let fixture: ComponentFixture<IcmpProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IcmpProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcmpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
