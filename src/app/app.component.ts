import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'westeros';

  counter:number = 0;
  
  speak(){
    alert ( "A man has no data. "); 
  }

  bump(){
    this.counter++; 
  }
  
}
