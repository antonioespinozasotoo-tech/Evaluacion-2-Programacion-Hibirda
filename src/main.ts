import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// Importación para SQLite según la foto de tu profesor
import { defineCustomElements } from 'jeep-sqlite/loader';

import { addIcons } from 'ionicons';
import { add, settingsOutline } from 'ionicons/icons';

if (environment.production) {
  enableProdMode();
}

// Inicializar el componente web de SQLite (Línea 16 en la foto de tu profesor)
defineCustomElements(window);

addIcons({
  add,
  'settings-outline': settingsOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
}).catch(err => console.log(err));