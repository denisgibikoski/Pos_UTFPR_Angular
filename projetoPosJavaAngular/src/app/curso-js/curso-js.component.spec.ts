import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoJSComponent } from './curso-js.component';

describe('CursoJSComponent', () => {
  let component: CursoJSComponent;
  let fixture: ComponentFixture<CursoJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
