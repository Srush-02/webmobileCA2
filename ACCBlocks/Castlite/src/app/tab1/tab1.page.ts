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
  locationLink: string = '';
  castliteLat = 12.9715987;
  castliteLng = 77.5945627;
  constructor() {}

  getCastliteLocation() {
    this.locationData = `Latitude: ${this.castliteLat}, Longitude: ${this.castliteLng}`;
    this.locationLink = `https://www.google.com/maps?q=${this.castliteLat},${this.castliteLng}`;
  }

  async getUserLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      this.locationData = `Your Location: Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}`;
      this.locationLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    } catch (error) {
      this.locationData = 'Error getting your location';
    }
  }

}
