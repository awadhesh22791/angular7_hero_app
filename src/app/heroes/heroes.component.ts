import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {HeroService} from '../service/hero.service';
import {Hero} from '../hero';

import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[];
  selectedHero:Hero;
  constructor(private heroService:HeroService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero:Hero):void{
    //this.selectedHero=hero;
    this.httpClient.get('http://localhost:8080/api/hero/'+hero.id).subscribe((res:Hero)=>{
      this.selectedHero=res;
    });
  }

  getHeroes():void{
    //this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
    this.httpClient.get('http://localhost:8080/api/hero').subscribe((res:Hero[])=>{
      console.log(res);this.heroes=res;
    });
  }
}
