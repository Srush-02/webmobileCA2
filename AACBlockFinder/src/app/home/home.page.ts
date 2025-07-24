import { Component } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { NgIf } from '@angular/common'; 
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, NgIf],
})
export class HomePage {
  photo: string | null = null;
  location: { latitude: number; longitude: number } | null = null;

   async getLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.location = {
      latitude: coordinates.coords.latitude,
      longitude: coordinates.coords.longitude,
    };
  }
   async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    this.photo = image.dataUrl!;
  }
}
