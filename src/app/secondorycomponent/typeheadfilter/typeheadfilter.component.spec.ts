import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeheadfilterComponent } from './typeheadfilter.component';

describe('TypeheadfilterComponent', () => {
  let component: TypeheadfilterComponent;
  let fixture: ComponentFixture<TypeheadfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeheadfilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeheadfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
