import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioTableTemplateComponent } from './scenario-table-template.component';

describe('ScenarioTableTemplateComponent', () => {
  let component: ScenarioTableTemplateComponent;
  let fixture: ComponentFixture<ScenarioTableTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioTableTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioTableTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
