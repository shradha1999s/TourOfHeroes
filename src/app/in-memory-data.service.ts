import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    {id : 0, name : "Wil Wheaton"},
    {id : 1, name : "Rajesh Koothrapali"},
    {id : 2, name : "Sam Winchester"},
    {id : 3, name : "Dean Winchester"},
    {id : 4, name : "Rachel Green"},
    {id : 5, name : "Ross Geller"},
    {id : 6, name : "Phoebe Buffay"},
    {id : 7, name : "Monica Geller"},
    {id : 8, name : "Chandler Bing"},
    {id : 9, name : "Joey Tribiani"},
    {id : 10, name : "Sheldon Cooper"},
    {id : 11, name : "Penny Hofstader"},
    {id : 12, name : "Leonard Hofstader"},
    {id : 13, name : "Amy Farah fowler"}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0;
  }
}