import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarEliminacionModalPage } from './confirmar-eliminacion-modal.page';

describe('ConfirmarEliminacionModalPage', () => {
  let component: ConfirmarEliminacionModalPage;
  let fixture: ComponentFixture<ConfirmarEliminacionModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmarEliminacionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
