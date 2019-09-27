import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNaoEncontradoComponent } from './usuario-nao-encontrado.component';

describe('UsuarioNaoEncontradoComponent', () => {
  let component: UsuarioNaoEncontradoComponent;
  let fixture: ComponentFixture<UsuarioNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
