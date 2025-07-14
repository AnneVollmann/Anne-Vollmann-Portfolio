import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleaguesOpinions } from './colleagues-opinions';

describe('ColleaguesOpinions', () => {
  let component: ColleaguesOpinions;
  let fixture: ComponentFixture<ColleaguesOpinions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleaguesOpinions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColleaguesOpinions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
