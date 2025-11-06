import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dynamic } from '../../directives/dynamic';

@Component({
  selector: 'app-tablet-summary',
  imports: [CommonModule, Dynamic],
  templateUrl: './tablet-summary.html',
  styleUrl: './tablet-summary.scss',
})
export class TabletSummary {
  downAndHold() {
    console.log("got");
  }

}
