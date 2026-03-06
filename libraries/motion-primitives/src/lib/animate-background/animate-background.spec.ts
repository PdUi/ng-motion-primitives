import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateBackground } from './animate-background';

describe('AnimateBackground', () => {
  let component: AnimateBackground;
  let fixture: ComponentFixture<AnimateBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimateBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
