import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { DemoAccordionComponent } from './demo-accordion';

describe('DemoAccordion', () => {
  let component: DemoAccordionComponent;
  let fixture: ComponentFixture<DemoAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoAccordionComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoAccordionComponent);
    component = fixture.componentInstance;
    fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
