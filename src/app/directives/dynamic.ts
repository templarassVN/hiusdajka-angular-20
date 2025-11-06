import { Directive, HostListener, OnDestroy, output } from '@angular/core';
import { BehaviorSubject, debounce, delay, Observable, Subject, takeUntil, timer } from 'rxjs';

@Directive({
  selector: '[appDynamic]'
})
export class Dynamic implements OnDestroy {
  mouseUp$: Subject<boolean> = new Subject();
  mouseDown$: Subject<boolean> = new Subject();

  onDownAndHold = output();
  constructor(
  ) {
    this.mouseDown$.pipe(
      debounce(() => timer(2000).pipe(takeUntil(this.mouseUp$)))
    ).subscribe(() => {
      console.log(1234);
      this.onDownAndHold.emit();
    }
    )
  }
  ngOnDestroy(): void {
    this.mouseDown$.complete();
    this.mouseUp$.complete();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log(123);
  }

  @HostListener('mousedown')
  onMouseClick() {
    console.log('down')
    this.mouseDown$.next(true)
  }

  @HostListener('mouseup')
  onMouseUp() {
    console.log('up');
    this.mouseUp$.next(true);
  }

}
