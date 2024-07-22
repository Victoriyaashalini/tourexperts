import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouptourComponent } from './grouptour.component';

describe('GrouptourComponent', () => {
  let component: GrouptourComponent;
  let fixture: ComponentFixture<GrouptourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrouptourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrouptourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
