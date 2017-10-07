import { Component, OnInit } from '@angular/core';
import { AuthorsListService } from './../authors-list/authors-list.service';

@Component({
  selector: 'app-authors-list2',
  templateUrl: './authors-list2.component.html',
  styleUrls: ['./authors-list2.component.css']
})
export class AuthorsList2Component implements OnInit {
  list;
  likeService;

likes;

  constructor(service: AuthorsListService) {
    this.list = service.getList();
    this.likeService = service;
    this.likes = service.like();
  }

  count() {
    this.likeService.count();
    this.likes = this.likeService.like();
  }


  ngOnInit() {
  }

}
