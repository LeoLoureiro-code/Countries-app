import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesHome } from './countries-home';

describe('CountriesHome', () => {
  let component: CountriesHome;
  let fixture: ComponentFixture<CountriesHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
