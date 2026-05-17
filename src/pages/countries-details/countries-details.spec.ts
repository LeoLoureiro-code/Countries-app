import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDetails } from './countries-details';

describe('CountriesDetails', () => {
  let component: CountriesDetails;
  let fixture: ComponentFixture<CountriesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
