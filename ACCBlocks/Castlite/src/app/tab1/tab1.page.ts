import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  locationData: string | null = null;
locationLink: string | null = null;

  castliteLat = 19.7802122;
  castliteLng = 72.784814;
  constructor() {}

  getCastliteLocation() {
    this.locationData = `Latitude: ${this.castliteLat}, Longitude: ${this.castliteLng}`;
    this.locationLink = `https://www.google.com/maps?q=${this.castliteLat},${this.castliteLng}`;
  }



 getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.locationData = `${lat}, ${lng}`;
        this.locationLink = `https://www.google.com/maps?q=${lat},${lng}`;
      },
      (error) => {
        console.error('Error getting location', error);
        this.locationData = 'Unable to retrieve location.';
        this.locationLink = null;
      }
    );
  } else {
    this.locationData = 'Geolocation is not supported by this browser.';
    this.locationLink = null;
  }
}

}
