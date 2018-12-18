import { Component, OnInit } from '@angular/core';
import {RegionsService} from '../regions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  where_i_am:any;

  zone:Object;
  money:number = 5.55;

  constructor(private regions:RegionsService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.where_i_am= this.route.snapshot.routeConfig.path;
  console.log("where am I ? ", this.where_i_am);
  
  this.getStuff();
  }

}
