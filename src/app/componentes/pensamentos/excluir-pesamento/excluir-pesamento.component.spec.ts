import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPesamentoComponent } from './excluir-pesamento.component';

describe('ExcluirPesamentoComponent', () => {
  let component: ExcluirPesamentoComponent;
  let fixture: ComponentFixture<ExcluirPesamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirPesamentoComponent]
    });
    fixture = TestBed.createComponent(ExcluirPesamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
