import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import {CategoriesComponent} from './categories/categories.component';
import {AjouteCategoriesComponent} from './categories/AjouteCategorie.component';
import {AjouteNoteComponent} from './note/ajoutNote.component';

export const routes: Routes = [
  { path: '', redirectTo: 'AppComponent ', pathMatch: 'full' },
  { path: 'Note', component: NoteComponent },
  { path: 'Categories', component: CategoriesComponent },
  {path: 'AjouterCategorie', component: AjouteCategoriesComponent},
  {path:'AjouterNote', component: AjouteNoteComponent}
];
