import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Hero} from '../hero'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8',
                              'Accept':'application/json'});
  httpOptions={headers:this.headers};

  @Input() hero:Hero;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  updateHero():void{
    this.httpClient.put('http://localhost:8080/api/hero',JSON.stringify(this.hero),this.httpOptions).subscribe((res)=>{
      console.log(res)
    });
  }

}
