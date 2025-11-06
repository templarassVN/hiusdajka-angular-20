import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInstruc } from './angular-instruc';

describe('AngularInstruc', () => {
  let component: AngularInstruc;
  let fixture: ComponentFixture<AngularInstruc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularInstruc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularInstruc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
