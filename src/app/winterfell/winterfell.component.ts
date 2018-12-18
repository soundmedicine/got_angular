import { Component, OnInit } from '@angular/core';
import {RegionsService} from '../regions.service';

@Component({
  selector: 'app-winterfell',
  templateUrl: './winterfell.component.html',
  styleUrls: ['./winterfell.component.scss']
})
export class WinterfellComponent implements OnInit {
  initialValue:string = "Sansa"; 
  fruits =["apple", "orange", "peach"];
  shown:boolean = true;

  zones:Object;

  constructor(private regions:RegionsService) { }

  ngOnInit() {
   this.getStuff();
  }

  getStuff(){
    this.regions.getData().subscribe(payload=>{
      this.zones = payload;
    })
  }
 

}
