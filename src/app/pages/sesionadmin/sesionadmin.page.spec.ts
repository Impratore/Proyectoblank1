import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesionadminPage } from './sesionadmin.page';

describe('SesionadminPage', () => {
  let component: SesionadminPage;
  let fixture: ComponentFixture<SesionadminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
