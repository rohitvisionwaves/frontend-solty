import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proposal } from './proposal';

describe('Proposal', () => {
  let component: Proposal;
  let fixture: ComponentFixture<Proposal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proposal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proposal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
