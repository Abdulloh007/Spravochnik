import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cg3Component } from './cg3.component';

describe('Cg3Component', () => {
  let component: Cg3Component;
  let fixture: ComponentFixture<Cg3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cg3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
