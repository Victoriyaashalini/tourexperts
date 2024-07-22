import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneymoonComponent } from './honeymoon.component';

describe('HoneymoonComponent', () => {
  let component: HoneymoonComponent;
  let fixture: ComponentFixture<HoneymoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoneymoonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoneymoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
