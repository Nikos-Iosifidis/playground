import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[appMiddleStateToggle]',
})
export class MiddleStateToggleDirective implements AfterViewInit {
  private model: boolean | null | undefined = undefined;
  private destroyed$ = takeUntilDestroyed();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngModel: NgModel,
  ) {}

  ngAfterViewInit() {
    const subscription = this.ngModel.valueChanges
      ?.pipe(this.destroyed$)
      .subscribe((value: any) => {
        this.model = value;
        this.updateClass();
        if (value !== null) {
          subscription?.unsubscribe();
        }
      });
  }

  private updateClass() {
    if (this.model === null) {
      this.addMiddleClass();
    } else {
      this.removeMiddleClass();
    }
  }

  private addMiddleClass() {
    this.renderer.addClass(this.el.nativeElement, 'middle-state');
  }

  private removeMiddleClass() {
    this.renderer.removeClass(this.el.nativeElement, 'middle-state');
  }
}
