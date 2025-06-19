import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AccordionGroupComponent } from './accordion-group';

describe('AccordionGroupComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionGroupComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AccordionGroupComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
