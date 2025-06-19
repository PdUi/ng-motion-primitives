import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion';

describe('Accordion', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AccordionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
