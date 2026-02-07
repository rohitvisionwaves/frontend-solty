import { Injectable } from '@angular/core';

/** Tracks whether the user has unlocked the full experience (memories → thank-you → proposal) this session. */
@Injectable({ providedIn: 'root' })
export class ValentineAccessService {
  private unlocked = false;

  /** Marks that the user opened the full experience from the Valentine's Day button. */
  setUnlocked(): void {
    this.unlocked = true;
  }

  /** Returns true if full experience was unlocked (e.g. by clicking "Open this for me"). */
  isUnlocked(): boolean {
    return this.unlocked;
  }

  /** Clears the flag when user returns to the welcome page. */
  clearUnlocked(): void {
    this.unlocked = false;
  }
}
