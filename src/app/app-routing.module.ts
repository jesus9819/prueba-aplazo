import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/characters-list',
    pathMatch:'full',
  },
  { path: 'home',
   loadChildren: () => 
   import('./components/pages/home/home.module').then(m => m.HomeModule) },

  { path: 'characters-list',
   loadChildren: () =>
    import('./components/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) },

  { path: 'character-details/:id',
   loadChildren: () =>
    import('./components/pages/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule) },
  { path: 'location-list', loadChildren: () => import('./components/pages/locations/locations.module').then(m => m.LocationsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
