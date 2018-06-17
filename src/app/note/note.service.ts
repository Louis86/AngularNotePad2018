import { Injectable } from '@angular/core';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {MessageService} from '../categories/message.service';
import {Note} from './note';
import {Categorie} from '../categories/categorie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'my-auth-token' })
};


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  private _urlNote: string = "http://127.0.0.1:8000/api/liste/note";

  getNote(): Observable<Note[]> {
    return this.http.get<Note[]>(this._urlNote)
      .pipe(catchError(this.handleError('getNote', []))) ;
  }





  private urlSupprimerNote: string = "http://127.0.0.1:8000/api/supprimer/note";

 // supprimerNotes (id: number){
 //   return this.http.delete(`${this._urlSupprimerNote}/${id}`, httpOptions);
 //}

  supprimerNote (not: any | number): Observable<Note> {
    const id = typeof not === 'number' ? not : not.id;
    const url = `${this.urlSupprimerNote}/${id}`;

      console.log(url);
  return this.http.delete<Note>(url,httpOptions);
  }






  private urlAjoutNote: string = "http://127.0.0.1:8000/api/ajout/note";

  ajoutNote(title:string, content:string,categorie:string): Observable<Note> {
    let nttt = JSON.stringify(
      {
        "title":title,
        "content":content,
        "categorie":categorie
      }
    )
    return this.http.post<Note>(this.urlAjoutNote, nttt, httpOptions)
      .pipe(   );
  }





  private _urlModifierNote: string = "http://127.0.0.1:8000/api/edit/note";
  editerNote (id: number, title: string,  content: string, cat: string): Observable<Note> {
    let not = JSON.stringify(
      {
        "title":title,
        "content":content,
        "categorie":cat
      }
    )
    console.log(not);
    return this.http.put(`${this._urlModifierNote}/${id}`, not, httpOptions).pipe(
      tap(_ => this.log(`mise à jours de la notee id=${id}`)),
      catchError(this.handleError<any>('editCategorie'))
    );
  }





  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }





  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('CategorieService: ' + message);
  }
}
