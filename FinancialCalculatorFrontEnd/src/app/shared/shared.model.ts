import { v4 as uuidv4 } from 'uuid';

export interface Shared{
   id: number;
   stakeholder: string;
   shares: number;
   investment: number;
}