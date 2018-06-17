import {Categorie} from '../categories/categorie';

export class Note {
  id: number;
  title: string = '';
  content: string = '';
  date: Date;
  categorie: Categorie;

}
