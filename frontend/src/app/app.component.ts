import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicService } from './services/music';
import { getValentineWeekDay } from './services/valentine-week';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    hearts: any[] = [];

    /** True only on 14 Feb; floating hearts are shown only then. */
    isValentineDay = false;

    /** Tracks playing state so template updates when toggling music. */
    isMusicPlaying = false;

    constructor(public musicService: MusicService) { }

    ngOnInit() {
        this.generateHearts();
        this.isValentineDay = getValentineWeekDay(new Date()) === 14;
        this.isMusicPlaying = this.musicService.getIsPlaying();
    }

    generateHearts() {
        for (let i = 0; i < 20; i++) {
            this.hearts.push({
                left: Math.random() * 100 + '%',
                size: (Math.random() * 20 + 10) + 'px',
                delay: (Math.random() * 10) + 's',
                duration: (Math.random() * 10 + 10) + 's'
            });
        }
    }

    toggleMusic() {
        this.musicService.toggle();
        this.isMusicPlaying = this.musicService.getIsPlaying();
    }
}
