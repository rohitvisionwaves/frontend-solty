import { TestBed } from '@angular/core/testing';

import { MemoryService } from './memory';

describe('MemoryService', () => {
  let service: MemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return memories from getMemories()', (done) => {
    service.getMemories().subscribe((memories) => {
      expect(memories.length).toBe(2);
      expect(memories[0].imagePath).toBe('/images/photo1.jpg');
      expect(memories[1].imagePath).toBe('/images/photo2.jpg');
      done();
    });
  });
});
