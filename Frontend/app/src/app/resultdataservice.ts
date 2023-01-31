import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from './service/DataTypes/course';

// Das ist ein Service der gemeinsame von ResultTable und ResultDetails genutzt wird.
// Wir nutzen einen Observer um bei 'onClick()' eines Nodes die Bezeichnung im ResultDetails Component zu updaten.


interface ResultNode {
  name: string
  id: number
  fileType: string
  author: string
  studiengang?: string
  year?: string
  keywords?: Set<string>
  children?: ResultNode[];
}

@Injectable({
  providedIn: 'root'
})
export class ResultDataService {

  private dataSubject = new Subject<ResultNode>();

  setData(data: ResultNode) {
    this.dataSubject.next(data);
    console.log(this.dataSubject);
    
  }

  getData() {
    return this.dataSubject.asObservable();
  }


  constructor() { }
}
