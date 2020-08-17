import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSelectorComponent } from './weather-selector.component';

describe('WeatherSelectorComponent', () => {
  let component: WeatherSelectorComponent;
  let fixture: ComponentFixture<WeatherSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
