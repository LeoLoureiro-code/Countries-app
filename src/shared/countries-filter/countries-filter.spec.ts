import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFilter } from './countries-filter';

describe('CountriesFilter', () => {
  let component: CountriesFilter;
  let fixture: ComponentFixture<CountriesFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
