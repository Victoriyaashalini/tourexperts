import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulartoursComponent } from './populartours.component';

describe('PopulartoursComponent', () => {
  let component: PopulartoursComponent;
  let fixture: ComponentFixture<PopulartoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopulartoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopulartoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
