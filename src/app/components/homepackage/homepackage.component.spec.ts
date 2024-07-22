import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepackageComponent } from './homepackage.component';

describe('HomepackageComponent', () => {
  let component: HomepackageComponent;
  let fixture: ComponentFixture<HomepackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
