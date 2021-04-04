import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownArrowComponent } from './components/drop-down-arrow/down-arrow/down-arrow.component';
import { ScenarioTableComponent } from './components/scenario-table/scenario-table/scenario-table.component';
import { Table1Component } from './components/table1/table1.component';
import { PostRoundTableComponent } from './components/post-round-table/post-round-table.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ScenarioTableTemplateComponent } from './components/scenario-table/scenario-table/scenario-table-template/scenario-table-template.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmDeleteComponent } from './components/scenario-table/confirm-delete/confirm-delete.component';



const routes: Routes = [
  { path: 'components/table1', component: Table1Component },
  { path: 'components/drop-down-arrow', component: DownArrowComponent},
  { path: 'components/scenario-table', component: ScenarioTableComponent},
  { 
    path: 'components/post-round-table', component: PostRoundTableComponent,
    children: [
      { path: 'component/scenario-table-template', component: ScenarioTableTemplateComponent},
      { path: 'component/confirm-delete', component: ConfirmDeleteComponent},
    ]
  },
  { path: 'components/side-menu', component: SideMenuComponent},
  // { path: 'component/scenario-table-template', component: ScenarioTableTemplateComponent},
  { path: 'components/footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Table1Component, DownArrowComponent, ScenarioTableComponent, PostRoundTableComponent,
                                  SideMenuComponent, ScenarioTableTemplateComponent, FooterComponent,ConfirmDeleteComponent ]
