import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimateBackground } from './demo-animate-background';

describe('DemoAnimateBackground', () => {
  let component: DemoAnimateBackground;
  let fixture: ComponentFixture<DemoAnimateBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoAnimateBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoAnimateBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
