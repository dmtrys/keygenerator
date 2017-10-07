import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsListService {

  constructor() { }
  
  getList() {
    return ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'];
  }

  aaa = 1;

  count() {
    this.aaa = 10;
    console.log(this.aaa);
  }

  like() {
    return this.aaa;
  }

}
