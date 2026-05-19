import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCard } from './countries-card';

describe('CountriesCard', () => {
  let component: CountriesCard;
  let fixture: ComponentFixture<CountriesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
