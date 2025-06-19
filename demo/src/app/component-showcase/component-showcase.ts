import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

enum ShowcaseType {
  preview = 0,
  code = 1,
}

@Component({
  selector: 'p2d-component-showcase',
  imports: [],
  templateUrl: './component-showcase.html',
  styleUrl: './component-showcase.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentShowcaseComponent {
  protected readonly showcaseType = ShowcaseType;
  protected readonly activeTab = signal(ShowcaseType.preview);

  protected setActiveTab(tab: ShowcaseType): void {
    this.activeTab.set(tab);
  }
}
