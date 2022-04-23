import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/hero';
import { HEROES } from '../../data/mock-heroes';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  
  selectedHero?: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
  }
}
