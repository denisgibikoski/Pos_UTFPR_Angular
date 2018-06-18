import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoHTML5Component } from './curso-html5.component';

describe('CursoHTML5Component', () => {
  let component: CursoHTML5Component;
  let fixture: ComponentFixture<CursoHTML5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoHTML5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoHTML5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
