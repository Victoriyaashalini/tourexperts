import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurexpertsComponent } from './ourexperts.component';

describe('OurexpertsComponent', () => {
  let component: OurexpertsComponent;
  let fixture: ComponentFixture<OurexpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurexpertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurexpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
