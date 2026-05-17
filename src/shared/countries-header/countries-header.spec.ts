import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesHeader } from './countries-header';

describe('CountriesHeader', () => {
  let component: CountriesHeader;
  let fixture: ComponentFixture<CountriesHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
