import { Component, OnInit } from '@angular/core';
import {CategorieService} from './categorie.service';
import {Categorie} from './categorie';
import {EventService} from '../event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ajouter-categorie',
  templateUrl: './AjouteCategorie.component.html',
  providers:[CategorieService]
})


export class AjouteCategoriesComponent implements OnInit {

  constructor(
    private _catService: CategorieService,
    private serviceInstance: EventService,
    private router:Router,
    ) { }

  cat: Categorie;

  ngOnInit() {
    this.cat = new Categorie();
  }

  ajouterCategorie(libelle: string): void {
     this.cat.libelle = libelle;
    this._catService.ajoutCategorie(this.cat)
      .subscribe(_ => {
        this.serviceInstance.sendEvent();
      });
    this.router.navigate(['/Categories']);
  }

}
