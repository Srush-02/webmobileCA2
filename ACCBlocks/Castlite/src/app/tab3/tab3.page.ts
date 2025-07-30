import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

 
features = [
  {
    title: 'Eco-Friendly',
    description: 'Produced using fly ash and an advanced manufacturing process, CASTLITE AAC blocks are ideal for green buildings.'
  },
  {
    title: 'Lightweight & Strong',
    description: 'Three times lighter than traditional red bricks, yet stronger and easier to handle, reducing construction load and time.'
  },
  {
    title: 'Customizable',
    description: 'Blocks can be tailored in size and density — down to 500 kg/m³ — to suit the needs of any project.'
  },
  {
    title: 'Durable & Insulating',
    description: 'High thermal insulation and durability make CASTLITE AAC Blocks ideal for long-lasting and energy-efficient buildings.'
  }
];
 constructor() {}


}
