import { Component, OnInit } from '@angular/core';
import {NoteService} from './note.service';
import {Note} from './note';
import {EventService} from '../event.service';
import {routes} from '../app-routing';
import {Router,RouterModule} from '@angular/router';
import {CategorieService} from '../categories/categorie.service';
import {Categorie} from '../categories/categorie';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
/**export class NotesComponent implements OnInit {

  constructor() { }
  ngOnInit() {  }
}
*/
export class NoteComponent implements OnInit{

  nt: Note;
  public editerNote = false;
  public notes = [];
  public editNote;
  public categories = [];

  constructor(
    private _noteService: NoteService,
    private _cateService: CategorieService,
    private router:Router,
    private serviceInstance: EventService) { }




        ngOnInit() {
            this.getNote();
        }

          getNote(): void{
            this._noteService.getNote().subscribe(notes =>this.notes = notes);
          }


  supprimeNote(not: any): void {
    this._noteService.supprimerNote(not.id)
      .subscribe(_ => {
        this.getNote();
        this.serviceInstance.sendEvent();
      });
    this.router.navigate(['/Note']);
  }

  getCategories(): void {
    this._cateService.getCategorie()
      .subscribe(categories => this.categories = categories);
  }

  edNote(note: Note){
    this.editerNote =true;
    this.getCategories();
    console.log(note);
    this. editNote = note;
  }


  modifierNote(title: string, content: string, cat: string) {
    this._noteService.editerNote(this.editNote.id, title, content, cat)
      .subscribe(_ => {
        this.getNote();
        this.serviceInstance.sendEvent();
      });
    this.router.navigate(['/Note']);
    this.editerNote = false;
  }





  }


