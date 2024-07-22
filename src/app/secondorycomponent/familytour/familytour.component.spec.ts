import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilytourComponent } from './familytour.component';

describe('FamilytourComponent', () => {
  let component: FamilytourComponent;
  let fixture: ComponentFixture<FamilytourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilytourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilytourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
