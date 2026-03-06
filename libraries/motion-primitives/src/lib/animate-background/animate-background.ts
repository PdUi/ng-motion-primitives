import { contentChildren, Directive, ElementRef, OnDestroy, Signal } from '@angular/core';

@Directive({
  selector: 'p2d-animate-background',
})
export class AnimateBackground implements OnDestroy {
  protected readonly elementRefs: Signal<readonly ElementRef<HTMLElement>[]> =
    contentChildren<ElementRef<HTMLElement>>('');
  // private subscriptions: OutputRefSubscription[] = [];

  public constructor() {
    // effect(() => {
    //   this.subscriptions = this.accordions().map((accordion: AccordionComponent) =>
    //     accordion.toggled.subscribe((toggledAccordion: AccordionComponent) => {
    //       if (!toggledAccordion.isOpen) {
    //         return;
    //       }
    //       this.accordions()
    //         .filter(
    //           (otherAccordion: AccordionComponent) =>
    //             otherAccordion !== toggledAccordion && otherAccordion.isOpen,
    //         )
    //         .forEach((otherAccordion: AccordionComponent) => {
    //           otherAccordion.onclick();
    //         });
    //     }),
    //   );
    // });
  }

  public ngOnDestroy(): void {
    // this.subscriptions.forEach((subscription) => {
    //   subscription.unsubscribe();
    // });
  }
}
