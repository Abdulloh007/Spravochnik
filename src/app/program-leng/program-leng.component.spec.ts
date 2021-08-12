import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramLengComponent } from './program-leng.component';

describe('ProgramLengComponent', () => {
  let component: ProgramLengComponent;
  let fixture: ComponentFixture<ProgramLengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramLengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramLengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
