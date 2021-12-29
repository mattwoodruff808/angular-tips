import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipAmountComponent } from './tip-amount.component';

describe('TipAmountComponent', () => {
  let component: TipAmountComponent;
  let fixture: ComponentFixture<TipAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
