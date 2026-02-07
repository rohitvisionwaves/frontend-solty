import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MusicService } from '../../services/music';
import { ValentineAccessService } from '../../services/valentine-access';
import {
  VALENTINE_WEEK_DAYS,
  getValentineWeekDay,
  getDayByDate,
  ValentineDay
} from '../../services/valentine-week';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
  standalone: true,
  imports: [CommonModule]
})
export class WelcomeComponent implements OnInit {
  /** All Valentine Week days (7–14 Feb) for tabs. */
  readonly allDays = VALENTINE_WEEK_DAYS;

  /** Day number (7–14) that matches today; used to highlight current day. */
  currentDayNum: number = 14;

  /** Currently selected day number (7–14) for display. */
  selectedDayNum: number = 14;

  /** Used for floating decoration elements in the card (5 items). */
  readonly floatItems = [0, 1, 2, 3, 4];

  constructor(
    private musicService: MusicService,
    private router: Router,
    private valentineAccess: ValentineAccessService
  ) {}

  /** Sets current and selected day from today's date; clears full-experience flag when landing on welcome. */
  ngOnInit(): void {
    this.currentDayNum = getValentineWeekDay(new Date());
    this.selectedDayNum = this.currentDayNum;
    this.valentineAccess.clearUnlocked();
  }

  /** Returns the Valentine day content for the selected day. */
  get selectedDay(): ValentineDay | undefined {
    return getDayByDate(this.selectedDayNum);
  }

  /** Day info for the current (opened) date; used for the "Opened for" message. */
  get openForDay(): ValentineDay | undefined {
    return getDayByDate(this.currentDayNum);
  }

  /** Message shown when the page opens: e.g. "Opened for 7th Feb · Rose Day". */
  get openForMessage(): string {
    const day = this.openForDay;
    if (!day) return '';
    return `Opened for ${this.currentDayNum}th Feb · ${day.name} ♥`;
  }

  /** Selects a day (7–14) only if it is current or past; future days stay disabled. */
  selectDay(dateNum: number): void {
    if (dateNum <= this.currentDayNum) {
      this.selectedDayNum = dateNum;
    }
  }

  /** Starts background music and navigates to the memories screen (full experience). */
  start(): void {
    this.musicService.play();
    this.valentineAccess.setUnlocked();
    this.router.navigate(['/memories'], { state: { fromValentineButton: true } });
  }
}
