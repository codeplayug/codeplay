import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinUsPage } from './join-us.page';

describe('JoinUsPage', () => {
  let component: JoinUsPage;
  let fixture: ComponentFixture<JoinUsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JoinUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
