import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadbookComponent } from './readbook.component';

describe('ReadbookComponent', () => {
  let component: ReadbookComponent;
  let fixture: ComponentFixture<ReadbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
