import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';

const Mycomponents =[CharacterDetailsComponent,CharacterListComponent];

@NgModule({
  declarations: [
    Mycomponents
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ ... Mycomponents]
})
export class CharactersModule { }
