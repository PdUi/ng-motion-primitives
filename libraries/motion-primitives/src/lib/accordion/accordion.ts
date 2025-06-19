import {
  ChangeDetectionStrategy,
  Component,
  type ElementRef,
  HostBinding,
  output,
  type OutputEmitterRef,
  type Signal,
  viewChild,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'p2d-accordion',
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @HostBinding('class.open') public isOpen = false;
  public readonly toggled: OutputEmitterRef<AccordionComponent> = output<AccordionComponent>();

  protected readonly details: Signal<ElementRef<HTMLElement> | undefined> = viewChild('section');

  public onclick(): void {
    const element = this.details()?.nativeElement;
    if (!element) {
      return;
    }

    const tl = gsap.timeline();
    if (this.isOpen) {
      tl.to(element, { opacity: 0 }).to(element, { height: 0 }, '-=.3');
    } else {
      tl.to(element, { height: 'auto' }).to(element, { opacity: 1 }, '-=.3');
    }

    this.isOpen = !this.isOpen;
    this.toggled.emit(this);
  }
}
