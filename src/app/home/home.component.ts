import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  initial:string = "Roberto"

  constructor(private srv:MyserviceService) { }

  ngOnInit() {
    this.initial = this.srv.getStuff();
  }

}
