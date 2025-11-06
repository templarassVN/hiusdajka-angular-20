import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabletSummary } from './components/tablet-summary/tablet-summary';
import { Dynamic } from './directives/dynamic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabletSummary, Dynamic],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
