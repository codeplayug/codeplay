import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurTeamPage } from './our-team.page';

describe('OurTeamPage', () => {
  let component: OurTeamPage;
  let fixture: ComponentFixture<OurTeamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OurTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
