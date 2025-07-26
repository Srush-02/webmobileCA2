import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
   standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
 
  imports: [ IonicModule, CommonModule],
})
export class HomePage {


  constructor(private router: Router) {}



  goToProductsDetails() {
  this.router.navigate(['/products']);
}

}
