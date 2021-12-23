import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  

  hero ?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroServiceService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.heroService.getHeros1(id)
      .subscribe(hero => this.hero = hero);
      console.log(this.hero)
  }

  goBack(): void {
    this.location.back();
  }

  save():void{
    if(this.hero){
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    }
  }
  

}
