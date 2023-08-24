import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detallePelicula: any =[];

  titleNew: string='';
  dateNew: string='';
  duracion: string='';
  description: string='';
  textLong: string='';
  urlImg: string='';
  

  constructor( public route: Router) { }

  

  ngOnInit() {
    this.detallePelicula = localStorage.getItem("detail");
    this.detallePelicula = JSON.parse(this.detallePelicula)

    this.titleNew =this.detallePelicula.title
    this.dateNew =this.detallePelicula.date
    this.duracion =this.detallePelicula.duracion
    this.description =this.detallePelicula.description
    this.urlImg =this.detallePelicula.url_imag
    
  }
  navigateToHome() {
    this.route.navigate(['/home']);
  }
  Navigate(value: any){
    this.route.navigate(['/home']);
    localStorage.setItem("detail",JSON.stringify(value))
  }
  stars: number[] = [1, 2, 3, 4, 5];
  selectedRatings: boolean[] = [false, false, false, false, false]; // Inicialmente, ningún icono está seleccionado

  toggleRating(index: number) {
    for (let i = 0; i <= index; i++) {
      this.selectedRatings[i] = true;
    }
  }

  isRated(index: number): boolean {
    return this.selectedRatings[index];
  }

  clearRatings() {
    for (let i = 0; i < this.selectedRatings.length; i++) {
      this.selectedRatings[i] = false;
    }
  }

}
