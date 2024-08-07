import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularcarouselComponent } from './popularcarousel.component';

describe('PopularcarouselComponent', () => {
  let component: PopularcarouselComponent;
  let fixture: ComponentFixture<PopularcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularcarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
