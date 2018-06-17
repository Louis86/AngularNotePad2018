import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { routes } from './app-routing';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import {CategorieService} from './categories/categorie.service';
import {MessageService} from './categories/message.service';
import {AjouteCategoriesComponent} from './categories/AjouteCategorie.component';
import {AjouteNoteComponent} from './note/ajoutNote.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    CategoriesComponent,
    AjouteCategoriesComponent,
    AjouteNoteComponent
  ],
  imports: [
    BrowserModule,   HttpClientModule , RouterModule.forRoot(routes), FormsModule
  ],
  providers: [CategorieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
