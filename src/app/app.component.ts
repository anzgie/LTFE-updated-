import { Component } from '@angular/core';
import { initializeApp, database} from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LTFE';

  constructor(){
    var config = {
      apiKey: "AIzaSyDnF7mmIB2_FOAMcCL6KKUMAh26xAttukg",
      authDomain: "pc-manager-c1743.firebaseapp.com",
      databaseURL: "https://pc-manager-c1743.firebaseio.com",
      projectId: "pc-manager-c1743",
      storageBucket: "pc-manager-c1743.appspot.com",
      messagingSenderId: "620375924890"
    };
    initializeApp(config);
  }
}
