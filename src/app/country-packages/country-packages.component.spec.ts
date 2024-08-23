import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPackagesComponent } from './country-packages.component';

describe('CountryPackagesComponent', () => {
  let component: CountryPackagesComponent;
  let fixture: ComponentFixture<CountryPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
