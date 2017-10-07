import { Component, OnInit } from '@angular/core';
import { AuthorsListService } from './authors-list.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

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
