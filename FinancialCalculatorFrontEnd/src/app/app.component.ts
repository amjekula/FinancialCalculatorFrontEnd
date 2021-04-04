import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  providers: [SharedService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public title= "Financing Scenario";
  public isEditable = false;

  constructor() { }


  ngOnInit(): void {
  }
  public onEditClick(){
    this.isEditable =true;
  }

  public onSave(){
    this.isEditable = false;
  }
}
      
