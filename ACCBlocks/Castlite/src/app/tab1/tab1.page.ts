import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  locationData: string = '';
  constructor() {}

  async getLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.locationData = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    } catch (error) {
      this.locationData = 'Error getting location';
    }
  }

}
