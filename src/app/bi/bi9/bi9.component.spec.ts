import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bi9Component } from './bi9.component';

describe('Bi9Component', () => {
  let component: Bi9Component;
  let fixture: ComponentFixture<Bi9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bi9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bi9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
