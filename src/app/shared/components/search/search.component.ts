import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSearch(value:String){
    console.log("buscar =>", value);
    
    // All :
    if(value && value.length > 3 ){
      
      this.router.navigate(['/characters-list'],{
        queryParams:{q:value}
      })
    }

  }

}
