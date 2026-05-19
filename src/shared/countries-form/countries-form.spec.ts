import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesForm } from './countries-form';

describe('CountriesForm', () => {
  let component: CountriesForm;
  let fixture: ComponentFixture<CountriesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
