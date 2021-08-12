import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bi7Component } from './bi7.component';

describe('Bi7Component', () => {
  let component: Bi7Component;
  let fixture: ComponentFixture<Bi7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bi7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bi7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
