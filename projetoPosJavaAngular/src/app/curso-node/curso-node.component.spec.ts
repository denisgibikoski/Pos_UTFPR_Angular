import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNODEComponent } from './curso-node.component';

describe('CursoNODEComponent', () => {
  let component: CursoNODEComponent;
  let fixture: ComponentFixture<CursoNODEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoNODEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNODEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
