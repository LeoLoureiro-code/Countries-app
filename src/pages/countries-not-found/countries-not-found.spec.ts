import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesNotFound } from './countries-not-found';

describe('NotFound', () => {
  let component: CountriesNotFound;
  let fixture: ComponentFixture<CountriesNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesNotFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesNotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
