import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Shared } from 'src/app/shared/shared.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-scenario-table',
  templateUrl: './scenario-table.component.html',
  styleUrls: ['./scenario-table.component.css']
})

export class ScenarioTableComponent implements OnInit {
  sharedItems: Shared[] = [];
  public show:boolean = false;
  public buttonName:any = 'Show';
  display = false;
  public tabs:any = [ "Series A"];
  tabtitle:string = 'Unnamed Round';

  public tabStatus: string = 'active';

  // tabs = ['Series A', 'Tab 2'];  selected = new FormControl(0);

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedItems = this.sharedService.getSharedElements();
  }

  activateTab(){
    this.show = !this.show;

    if(this.show){
      this.tabStatus = 'disabled';
    }else{
      this.tabStatus = 'active';
    }
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  public onPress() {
    this.display = !this.display;
  }

  public dec() {
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc() {
    if(this.tabs != 'Unnamed Round'){
      // this.tabs = [ ...this.tabs,  this.tabtitle];
      this.tabs.push(this.tabtitle);
    }else{
      
    }
  }

  

  // addTab(selectAfterAdding: boolean) {
  //   //if title we pass then add the title of the tab elase name with new
  //   if(this.tabtitle != ''){
  //     this.tabs.push(this.tabtitle);
  //   }else{
  //     this.tabs.push('New');
  //   }
       
  //   this.tabtitle = '';
    
  //   if (selectAfterAdding) {
  //     this.selected.setValue(this.tabs.length - 1);
  //   }
    
  // }
    // Remove the tabs
  public removeTab(index: number) {
      this.tabs.splice(index, 1);
  } 

  // public openPage(pageName: any,elmnt: any,color: any) {
  //   var i, tabcontent, tablinks;

  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   tablinks = document.getElementsByClassName("tablink");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].style.backgroundColor = "";
  //   }
  //   document.getElementById(pageName).style.display = "block";
  //   elmnt.style.backgroundColor = color;
  // }
  
  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("defaultOpen").click();

}


