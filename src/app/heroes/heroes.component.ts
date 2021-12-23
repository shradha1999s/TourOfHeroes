import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros ?: Hero[];

  constructor(
      private heroService: HeroServiceService,
      private messageService : MessageServiceService) {
   // this.heros = this.heroService.getHeros();
   }

   getHeros(){
    this.heroService.getHeros().subscribe((heroes) => {
      this.heros = heroes
    });
    console.log(this.heros)
   }

  ngOnInit(): void {

    this.getHeros();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros?.push(hero);
      });
  }


  //selectedHero ?: Hero;
  // onSelect(hero:Hero){
  //   this.selectedHero = hero;
  // }
  deleteHero(hero:Hero){
    this.heros = this.heros?.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }


}
