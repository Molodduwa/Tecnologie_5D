import { Component } from '@angular/core';
import { AutoSuv } from '../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-suv',
  templateUrl: './auto-suv.component.html',
  styleUrls: ['./auto-suv.component.css']
})
export class AutoSuvComponent {
  suvs:AutoSuv[];
  constructor(private router:Router){
    this.suvs = this.router.getCurrentNavigation().extras.state as AutoSuv[];
  }

}