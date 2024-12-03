import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcpProfileComponent } from './tcp-profile.component';

describe('TcpProfileComponent', () => {
  let component: TcpProfileComponent;
  let fixture: ComponentFixture<TcpProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TcpProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
