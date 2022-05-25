import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { character } from '@shared/interface/character-interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor( private http: HttpClient) { }
  searchCharacters(query= '',page = 1){
    const filter=`${environment.baseUrlApi}/character/?name=${query}`;
    return this.http.get<character[]>(filter)
  }


  getDetails(id:number){
    return this.http.get<character>(`${environment.baseUrlApi}/character/${id}`);
  }
}
