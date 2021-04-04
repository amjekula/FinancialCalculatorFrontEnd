import { Injectable } from '@angular/core';
import {Shared} from 'src/app/shared/shared.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedElements: Shared[] = [
    {
      id: 1,
      stakeholder: 'Steve Jobless',
      shares: 500000,
      investment: 23242.00
    },
    {
      id: 2,
      stakeholder: 'Jessica Livingrock',
      shares: 40000,
      investment: 1212.00
    },
    {
      id: 3,
      stakeholder: 'SwissCombinator',
      shares: 100000,
      investment: 80000.00
    },
    {
      id: 4,
      stakeholder: 'Silversand',
      shares: 67555,
      investment: 1500.00
    }
  ];

  getSharedElements(){
    return this.sharedElements;
  }

  save(stakeholder: Shared){
    this.sharedElements.push(stakeholder);
  }

}
