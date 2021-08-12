import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bi5Component } from './bi5.component';

describe('Bi5Component', () => {
  let component: Bi5Component;
  let fixture: ComponentFixture<Bi5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bi5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
