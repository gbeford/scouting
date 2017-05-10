import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitEntryComponent } from './pit-entry.component';

describe('PitEntryComponent', () => {
  let component: PitEntryComponent;
  let fixture: ComponentFixture<PitEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
