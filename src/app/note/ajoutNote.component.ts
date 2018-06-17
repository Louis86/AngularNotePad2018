import { Component, OnInit } from '@angular/core';
import {NoteService} from './note.service';
import {Note} from './note';
import {EventService} from '../event.service';
import {Router} from '@angular/router';
import {CategorieService} from '../categories/categorie.service';

@Component({
  selector: 'ajouter-note',
  templateUrl: './ajoutNote.component.html',
  providers:[NoteService,CategorieService]
})


export class AjouteNoteComponent implements OnInit {

  constructor(
    private _notService: NoteService,
    private catService: CategorieService,
    private serviceInstance: EventService,
    private router:Router,
  ) { }

  nt: Note;
  public ct = [];
  public notes = [];

  ngOnInit() {
    this.nt = new Note();
    this.getCategories();
  }

  getNote(): void{
    this._notService.getNote().subscribe(notes =>this.notes = notes);
  }

  ajouterNote(title: string,content: string, libelle: string): void {
    this._notService.ajoutNote(title,content,libelle)
      .subscribe(_ => {
        this.getNote();
        this.serviceInstance.sendEvent();
      });
    this.router.navigate(['/Note']);
  }

  getCategories(): void {
    this.catService.getCategorie()
      .subscribe(categories => this.ct = categories);
  }

}
