import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  
@Input() language: string;
@Output() change = new EventEmitter();
tog = true;

toggleLanguage(){
  this.tog = !this.tog;

  this.language = (this.tog) ? 'English' : 'Swedish';
  this.change.emit();
}





  ngOnInit() {
  }

}
