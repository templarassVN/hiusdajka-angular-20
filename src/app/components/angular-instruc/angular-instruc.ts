import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-instruc',
  imports: [],
  templateUrl: './angular-instruc.html',
  styleUrl: './angular-instruc.scss',
})
export class AngularInstruc {
  protected readonly title = signal('hiusdajka');

}
