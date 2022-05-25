import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { character } from '@app/shared/interface/character-interface';
import { CharacterService } from '@app/shared/services/character.service';
import { take } from 'rxjs';
type RequestInfo = {
  next:string;
}


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters:character[]=[];
  info: RequestInfo = {
    next:null as any,
  };
  private pageNum=1;
  private query!: string; 
  private hideScrollHeight= 200;
  private showScrollHeight=500;
  constructor(private characterSvc: CharacterService) { }

  ngOnInit(): void {
    this.getDataFromService()
  }

  private getDataFromService():void{
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(take(1)).subscribe((res:any)=>{
      console.log("reponse",res);
      
      const {info,results}=res;
      this.characters=[...this.characters, ...results];
      this.info = info;
    })
  }
}
