import { Component, OnInit } from '@angular/core';
import {CategorieService} from './categorie.service';
import {Categorie} from './categorie';
import {EventService} from '../event.service';
import {routes} from '../app-routing';
import {Router,RouterModule} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  ct: Categorie;
  public editer = false;
  public categories = [];
  public catedit;
  public errorMsg;
  constructor(
    private _categorieService: CategorieService,
    private router:Router,
    private serviceInstance: EventService) { }

  ngOnInit() {
    this.getCategories();
  }


  getCategories(): void {
    this._categorieService.getCategorie()
      .subscribe(categories => this.categories = categories);
  }

  supprimerCategorie(id: number): void {
    this._categorieService.supprimerCategorie(id)
      .subscribe(_ => {
        this.getCategories();
        this.serviceInstance.sendEvent();
      });
    this.router.navigate(['/Categories']);
  }

  editCat(cat: Categorie){
    this.editer =true;
    console.log(cat);
    this.catedit = cat;
  }
  modifierCategorie(libelle: string) {
    this._categorieService.editerCategorie(this.catedit.id, libelle)
      .subscribe(_ => {
        this.getCategories();
        this.serviceInstance.sendEvent();
      });

    this.router.navigate(['/Categories']);
    this.editer = false;

  }

}
