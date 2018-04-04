import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule //aqui vienen los providers de modo que no tengo que escribirlos aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
