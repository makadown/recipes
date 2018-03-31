import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

/*
auxiliado también por
https://itnext.io/step-by-step-complete-firebase-authentication-in-angular-2-97ca73b8eb32
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit(){
       firebase.initializeApp({
         apiKey: "AIzaSyAXTN1rwsHcsHtdoJ_9DRtw6u2kA-fcal8",
         authDomain: "ng-recipe-book-9ff2a.firebaseapp.com",
         databaseURL: "https://ng-recipe-book-9ff2a.firebaseio.com",
         projectId: "ng-recipe-book-9ff2a",
         storageBucket: "ng-recipe-book-9ff2a.appspot.com",
         messagingSenderId: "762704241991"
      });
  }
  onNavigate(feature:string){
        this.loadedFeature = feature;
  }
}
