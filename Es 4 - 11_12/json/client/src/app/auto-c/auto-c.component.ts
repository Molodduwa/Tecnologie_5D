import { Component } from '@angular/core';
import { AutoCompatte } from '../models/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auto-c',
  templateUrl: './auto-c.component.html',
  styleUrls: ['./auto-c.component.css']
})
export class AutoCComponent {
  compatte:AutoCompatte[];
  constructor(private router:Router){
    this.compatte = this.router.getCurrentNavigation().extras.state as AutoCompatte[];
  }

}
