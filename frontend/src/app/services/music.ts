import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audio = new Audio();
  private isPlaying = false;

  constructor() {
    this.audio.src = 'assets/music/love-song.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.5;
  }

  play() {
    if (!this.isPlaying) {
      this.audio.play().catch(err => console.error('Audio play failed:', err));
      this.isPlaying = true;
    }
  }

  pause() {
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  getIsPlaying() {
    return this.isPlaying;
  }
}
