import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletSummary } from './tablet-summary';

describe('TabletSummary', () => {
  let component: TabletSummary;
  let fixture: ComponentFixture<TabletSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabletSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabletSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
