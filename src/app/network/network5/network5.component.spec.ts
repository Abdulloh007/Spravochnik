import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Network5Component } from './network5.component';

describe('Network5Component', () => {
  let component: Network5Component;
  let fixture: ComponentFixture<Network5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Network5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Network5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
