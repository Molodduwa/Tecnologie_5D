import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { AutoSportive } from './models/model';
import { AutoSuv } from './models/model';
import { AutoCompatte } from './models/model';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    autoS: AutoSportive[];
    autoSuv: AutoSuv[];
    autoCompattes: AutoCompatte[];
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://3000-molodduwa-tecnologie5d-qi7mp0ziijy.ws-eu107.gitpod.io/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.autoS = data["Auto Sportive"];
    this.autoSuv = data["Auto SUV"];
    this.autoCompattes=data["Auto Compatte"];
    });
    }
}