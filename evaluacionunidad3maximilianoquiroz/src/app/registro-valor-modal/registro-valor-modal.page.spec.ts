import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroValorModalPage } from './registro-valor-modal.page';

describe('RegistroValorModalPage', () => {
  let component: RegistroValorModalPage;
  let fixture: ComponentFixture<RegistroValorModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroValorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
