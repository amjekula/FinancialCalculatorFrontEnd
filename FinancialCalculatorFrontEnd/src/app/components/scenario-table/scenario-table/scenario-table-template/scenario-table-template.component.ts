import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario-table-template',
  templateUrl: './scenario-table-template.component.html',
  styleUrls: ['./scenario-table-template.component.css']
})
export class ScenarioTableTemplateComponent implements OnInit {

  display = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPress() {
    this.display = !this.display;
  }
}
