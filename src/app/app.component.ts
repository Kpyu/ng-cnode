import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './api/data-service.service'
export class Hero {
  id: number;
  name: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataServiceService]
})
export class AppComponent implements OnInit {
  public heroes = HEROES;
  title = 'Tour of Heroes';
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
  constructor(private heroSearchService: DataServiceService) { }  
  ngOnInit() {
    this.selectedHero = this.heroes[0];
    // this.heroSearchService.getTopicList()
    //   .catch(Error => {
    //     console.log(Error);
    // })
  }
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];