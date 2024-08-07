import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsfrontComponent } from './paymentsfront.component';

describe('PaymentsfrontComponent', () => {
  let component: PaymentsfrontComponent;
  let fixture: ComponentFixture<PaymentsfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsfrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
