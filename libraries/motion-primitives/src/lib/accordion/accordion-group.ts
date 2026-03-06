/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types*/
import {
  contentChildren,
  Directive,
  effect,
  type OnDestroy,
  type OutputRefSubscription,
  type Signal,
} from '@angular/core';
import { AccordionComponent } from './accordion';

@Directive({
  selector: 'p2d-accordion-group',
})
export class AccordionGroupComponent implements OnDestroy {
  protected readonly accordions: Signal<readonly AccordionComponent[]> =
    contentChildren(AccordionComponent);
  private subscriptions: OutputRefSubscription[] = [];

  public constructor() {
    effect(() => {
      this.subscriptions = this.accordions().map((accordion: AccordionComponent) =>
        accordion.toggled.subscribe((toggledAccordion: AccordionComponent) => {
          if (!toggledAccordion.isOpen) {
            return;
          }

          this.accordions()
            .filter(
              (otherAccordion: AccordionComponent) =>
                otherAccordion !== toggledAccordion && otherAccordion.isOpen,
            )
            .forEach((otherAccordion: AccordionComponent) => {
              otherAccordion.onclick();
            });
        }),
      );
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
