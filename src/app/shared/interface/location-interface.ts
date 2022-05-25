export interface location {
    info: Info;
    results: results[];
  }
  
  export interface results {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
  }
  
  interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
  }