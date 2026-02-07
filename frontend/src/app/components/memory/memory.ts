import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MemoryService, Memory } from '../../services/memory';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.html',
  styleUrls: ['./memory.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MemoryComponent implements OnInit {
  /** Shayari for each card so the app always shows your words, never plain or old text. */
  private static readonly CARD_SHAYARI = [
    'Woh pehli mulaqat ek khubsurat ehsaas thi,\nBaatein jaise dil ke paas thi,\nUs raat ne ek nayi kahani likh di,\nAur dosti ek khaas yaad ban gayi.',
    'Har mulaqat mein ek nayi khushi mili,\nTumhari muskaan mein zindagi mili,\nWaqt chhota tha par yaadein gehri ho gayi,\nAur tum meri aadat si ban gayi.'
  ];

  memories: Memory[] = [];
  /** Tilt angles per card [rotateX, rotateY] for 3D hover effect. */
  cardTilts: Array<{ x: number; y: number }> = [];

  constructor(private memoryService: MemoryService, private router: Router) { }

  /** Loads memories from the backend and assigns them for the view; card text is always your shayari. */
  ngOnInit(): void {
    this.memoryService.getMemories().subscribe(data => {
      this.memories = data.map((m, i) => ({
        ...m,
        description: MemoryComponent.CARD_SHAYARI[i] ?? m.description
      }));
      this.cardTilts = this.memories.map(() => ({ x: 0, y: 0 }));
    });
  }

  /** Updates 3D tilt based on mouse position over the card. */
  onCardMouseMove(event: MouseEvent, index: number): void {
    if (index >= this.cardTilts.length) return;
    this.updateTilt(event, index);
  }

  /** Resets 3D tilt when mouse leaves the card. */
  onCardMouseLeave(index: number): void {
    if (index >= this.cardTilts.length) return;
    this.cardTilts[index] = { x: 0, y: 0 };
    this.cardTilts = [...this.cardTilts];
  }

  /** Returns CSS transform string for the card at index for 3D tilt. */
  getCardTransform(index: number): string {
    if (index >= this.cardTilts.length) return '';
    const t = this.cardTilts[index];
    return `perspective(1000px) rotateX(${t.x}deg) rotateY(${t.y}deg)`;
  }

  private updateTilt(event: MouseEvent, index: number): void {
    const card = event.currentTarget as HTMLElement;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = (event.clientY - cy) / 18;
    const y = (event.clientX - cx) / 18;
    this.cardTilts[index] = {
      x: Math.max(-10, Math.min(10, x)),
      y: Math.max(-10, Math.min(10, -y))
    };
    this.cardTilts = [...this.cardTilts];
  }

  /** Navigates to the thank-you screen. */
  next(): void {
    this.router.navigate(['/thank-you']);
  }
}
