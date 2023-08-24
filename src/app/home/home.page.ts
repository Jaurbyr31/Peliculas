import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categorias: any = [];
  detallePelicula: any = [];


  constructor(
    public http: HttpClient,
    public route: Router
  ) {}
  
  ngOnInit(){
    this.http.get('assets/peliculas/peliculas.json').subscribe(data =>{
      this.categorias = JSON.parse(JSON.stringify(data))[0].peliculas.categories;
      this.detallePelicula = JSON.parse(JSON.stringify(data))[0].detallePelicula;
    });
    console.log('fuhauh',this.categorias)
    console.log('fuhauh',this.detallePelicula)
  }
  Navigate(value: any){
    this.route.navigate(['/detail']);
    localStorage.setItem("detail",JSON.stringify(value))
  }

}
