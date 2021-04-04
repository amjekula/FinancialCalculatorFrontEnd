import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRoundTableComponent } from './post-round-table.component';

describe('PostRoundTableComponent', () => {
  let component: PostRoundTableComponent;
  let fixture: ComponentFixture<PostRoundTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRoundTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRoundTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
