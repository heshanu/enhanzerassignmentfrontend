import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVertical } from './chart-vertical';

describe('ChartVertical', () => {
  let component: ChartVertical;
  let fixture: ComponentFixture<ChartVertical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartVertical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartVertical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
