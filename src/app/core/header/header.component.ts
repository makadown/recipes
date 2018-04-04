import { Component  } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import {Subscription} from 'rxjs/Subscription';
import {Response} from '@angular/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  //subscription = new Subscription();
  constructor(private dataStorageService: DataStorageService ,
              public authService: AuthService){

  }

 onSaveData() {
    //subscription =
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response:Response)=>{
          console.log(response);
      }
    );
 }

 onFetchData(){
   //Aquí no necesito suscribirme porque ya lo hice dentro del servicio.
   this.dataStorageService.getRecipes();
 }

 onLogout(){ this.authService.logout();}

}
