import { Component } from '@angular/core';
import {HistoryItem} from './home.component.type'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  items: HistoryItem[] = [
    {
      created_at: "2024-01-16 03:31:54",
      title: "A beautiful girl",
      type: "product_image",
      id: 31
    },
    {
      created_at: "2024-01-15 00:03:06",
      title: "Air mineral AquaVita",
      type: "copywriting",
      id: 3
    },
    {
      created_at: "2024-01-14 19:47:29",
      title: "AquaVita",
      type: "video",
      id: 13
    },
    {
      created_at: "2024-01-14 18:51:32",
      title: "AquaVita",
      type: "video",
      id: 12
    }
  ]
}
