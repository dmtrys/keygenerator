import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthorsListService } from './authors-list/authors-list.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { LikeComponent } from './like/like.component';
import { AuthorsList2Component } from './authors-list2/authors-list2.component';

import { SummaryPipe } from './summary.pipe';
import { PanelComponent } from './panel/panel.component';

import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsListComponent,
    LikeComponent,
    AuthorsList2Component,
    SummaryPipe,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClickOutsideModule
  ],
  providers: [
    AuthorsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
