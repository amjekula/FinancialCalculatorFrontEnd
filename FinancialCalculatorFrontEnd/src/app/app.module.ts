import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Table1Component} from './components/table1/table1.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownArrowComponent } from './components/drop-down-arrow/down-arrow/down-arrow.component';
import { ScenarioTableComponent } from './components/scenario-table/scenario-table/scenario-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostRoundTableComponent } from './components/post-round-table/post-round-table.component';
import { SharedService } from './shared/shared.service';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ScenarioTableTemplateComponent } from './components/scenario-table/scenario-table/scenario-table-template/scenario-table-template.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { ConfirmDeleteComponent } from './components/scenario-table/confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DownArrowComponent,
    ScenarioTableComponent,
    Table1Component,
    PostRoundTableComponent,
    SideMenuComponent,
    ScenarioTableTemplateComponent,
    FooterComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
