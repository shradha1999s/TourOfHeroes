import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageServiceService } from './message-service.service';
import { HEROES } from './mock-heroes';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  //heros ?: Hero[] = HEROES;
  private herosURl = 'api/heroes';
  // private herosURl = 'http://localhost:3000/Data';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private messageService : MessageServiceService,
    private http : HttpClient) { }

  getHeros() : Observable<Hero[]>{
    return this.http.get<Hero[]>(this.herosURl)
            .pipe(
              tap(_ => this.log('fetched heroes')),
              catchError(this.handleError<Hero[]>('getHeroes',[]))
            );
  }

  getHeros1(id: number): Observable<Hero> {
      const url = `${this.herosURl}/${id}`;
      return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetched hero : Id : ${id}`)),
      catchError(this.handleError<Hero>(`getHero id : ${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.addMessages(`HeroService: ${message}`);
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

updateHero(hero: Hero): Observable<any> {
  return this.http.put(this.herosURl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`Updated hero : Id : ${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

/** POST: add a new hero to the server */
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.herosURl, hero, this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`Added hero with Id : ${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}

deleteHero(id:number): Observable<Hero> {
  const url = `${this.herosURl}/${id}`;

  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`Deleted hero : Id : ${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}

searchHero(term:String): Observable<Hero[]>{
  if(!term.trim()){
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.herosURl}/?name=${term}`).pipe(
    tap(
      x => x.length ?
      this.log(`found heros Matching : ${term}`) : 
      this.log(`No Heros Found for : ${term}`)
    ),
    catchError(this.handleError<Hero[]>('searchHeros', []))
  );

}

  
}
