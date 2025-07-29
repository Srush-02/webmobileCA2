import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
imageUrl: string | undefined;
  constructor() {}

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 50,
        resultType: CameraResultType.DataUrl,
      });
      this.imageUrl = image.dataUrl;
    } catch (error) {
      console.error('Camera error:', error);
    }
  }
}
