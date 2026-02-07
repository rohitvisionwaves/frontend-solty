import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Memory {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  date: string;
}

/** In-memory list of romantic memory cards (shayari and image path). */
const MEMORIES: Memory[] = [
  {
    id: 1,
    title: '',
    description:
      'Woh pehli mulaqat ek khubsurat ehsaas thi,\nBaatein jaise dil ke paas thi,\nUs raat ne ek nayi kahani likh di,\nAur dosti ek khaas yaad ban gayi.',
    imagePath: '/images/photo1.jpg',
    date: ''
  },
  {
    id: 2,
    title: '',
    description:
      'Har mulaqat mein ek nayi khushi mili,\nTumhari muskaan mein zindagi mili,\nWaqt chhota tha par yaadein gehri ho gayi,\nAur tum meri aadat si ban gayi.',
    imagePath: '/images/photo2.jpg',
    date: ''
  }
];

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  /** Returns the list of memories as an observable (frontend-only, no backend). */
  getMemories(): Observable<Memory[]> {
    return of([...MEMORIES]);
  }
}
