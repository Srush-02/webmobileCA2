import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;

  async getLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.error = null;
    } catch (err) {
      this.error = 'Failed to get location';
    } 
}
}
