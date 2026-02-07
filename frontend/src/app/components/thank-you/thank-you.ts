import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.html',
  styleUrls: ['./thank-you.css']
})
export class ThankYouComponent {
  constructor(private router: Router) { }

  /** Navigates to the proposal screen. */
  next() {
    this.router.navigate(['/proposal']);
  }
}
