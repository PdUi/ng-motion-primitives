import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  Renderer2,
  Signal,
  viewChildren,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'p2d-demo-animate-background',
  imports: [],
  templateUrl: './demo-animate-background.html',
  styleUrl: './demo-animate-background.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAnimateBackground {
  private readonly targets: Signal<readonly ElementRef<HTMLElement>[]> = viewChildren('target');
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);
  public constructor() {
    effect(() => {
      this.targets().map((target: ElementRef<HTMLElement>) => {
        const parentEle = target.nativeElement.parentElement;
        const backgroundEle = this.renderer.createElement('div');
        backgroundEle.classList.add('p2d-animated-background');
        console.log(parentEle?.outerHTML);
        this.renderer.removeChild(parentEle, target.nativeElement);
        console.log(parentEle?.outerHTML);
        this.renderer.appendChild(backgroundEle, target.nativeElement);
        console.log(parentEle?.outerHTML);
        // backgroundEle.appendChild(target.nativeElement);
        // this.renderer.
        this.renderer.appendChild(parentEle, backgroundEle);
        console.log(parentEle?.outerHTML);
        // target.nativeElement.parentElement?.removeChild(target.nativeElement);
        // target.nativeElement.parentElement?.appendChild(backgroundEle);
      });
    });
  }

  toggleButton(event: MouseEvent): void {
    const clickedElementBackground = (event.target as HTMLElement).parentElement;

    const tl = gsap.timeline();
    tl.to(clickedElementBackground, { background: 'grey' }); //.to(element, { height: 0 }, '-=.3');

    if (
      clickedElementBackground?.parentElement?.children?.length &&
      clickedElementBackground.parentElement.children.length > 1
    ) {
      [...clickedElementBackground.parentElement.children]
        .filter((el) => el !== clickedElementBackground)
        .forEach((el) => gsap.timeline().to(el, { background: 'transparent' })); //.reversed(true));
    }
  }
}
