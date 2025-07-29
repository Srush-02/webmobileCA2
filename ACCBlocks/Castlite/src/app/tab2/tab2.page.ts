import { Component } from '@angular/core';
import { Camera, CameraResultType , CameraSource} from '@capacitor/camera';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  imageUrls: string[] = [];
  constructor() {}

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 50,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      if (image?.dataUrl) {
        this.imageUrls.unshift(image.dataUrl); // Add new photo at the start
      }
    } catch (error) {
      console.error('Camera error:', error);
    }
  }
}
