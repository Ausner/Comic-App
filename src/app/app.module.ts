import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Rutas
import {APP_ROUTING} from './app.routes';


//Servicios
import { HeroesService } from './services/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/busqueda/buscar/buscar.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';





@NgModule({ //Aqui van los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent,
    HeroeTarjetaComponent,


  ], 
  imports: [ //Aqui van las rutas
    BrowserModule,
    APP_ROUTING,
    
  ],
  providers: [ //Aqui van los servicios
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
