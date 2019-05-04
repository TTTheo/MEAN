import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashChartComponent } from './crash-chart.component';

describe('CrashChartComponent', () => {
  let component: CrashChartComponent;
  let fixture: ComponentFixture<CrashChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
