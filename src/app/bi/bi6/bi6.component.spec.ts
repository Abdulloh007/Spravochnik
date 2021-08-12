import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bi6Component } from './bi6.component';

describe('Bi6Component', () => {
  let component: Bi6Component;
  let fixture: ComponentFixture<Bi6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bi6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bi6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
