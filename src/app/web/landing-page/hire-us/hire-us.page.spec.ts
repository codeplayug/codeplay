import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HireUsPage } from './hire-us.page';

describe('HireUsPage', () => {
  let component: HireUsPage;
  let fixture: ComponentFixture<HireUsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HireUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
