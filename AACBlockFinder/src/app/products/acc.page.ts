import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-acc',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './acc.page.html',
  styleUrls: ['./acc.page.scss']
})
export class AccPage {
  photo: string | null = null;

    constructor(private router: Router) {}

     async takeProductPhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    this.photo = image.dataUrl!;
  }
  products = [
    {
      name: 'Standard ACC Block',
      size: '600x200x100 mm',
      weight: '8kg',
      usage: 'Partition Walls'
    },
    {
      name: 'Jumbo ACC Block',
      size: '600x300x150 mm',
      weight: '15kg',
      usage: 'Load Bearing'
    }
  ];

  goToLocation() {
  this.router.navigate(['/location']);
}
}
