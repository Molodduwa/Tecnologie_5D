import { Component } from '@angular/core';
import { AutoSportive } from '../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-s',
  templateUrl: './auto-s.component.html',
  styleUrls: ['./auto-s.component.css']
})
export class AutoSComponent {
  sportive:AutoSportive[];
  constructor(private router:Router){
    this.sportive = this.router.getCurrentNavigation().extras.state as AutoSportive[];
  }

}