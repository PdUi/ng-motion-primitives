import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionComponent, AccordionGroupComponent } from '@p2d/motion-primitives';
import { ComponentShowcaseComponent } from '../component-showcase/component-showcase';

@Component({
  selector: 'p2d-demo-accordion',
  imports: [ComponentShowcaseComponent, AccordionComponent, AccordionGroupComponent],
  templateUrl: './demo-accordion.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/* eslint-disable @typescript-eslint/no-extraneous-class */
export class DemoAccordionComponent {}
