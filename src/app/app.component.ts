import { Component, Input} from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor (
    private localStorageService: LocalStorageService
) {

    this.items = (localStorage.getItem('items')) ? JSON.parse( localStorage.getItem('items') ): [];


    this.activeButton = (localStorage.getItem('activeButton')) ? localStorage.getItem('activeButton') : 'English';

    //console.log(this.items);
}

items = [
  //{'key': 'demo', 'english': 'demo', 'swedish': 'demo', 'norwegian': 'demo'}
];

key = "VWS_";
english="*";
swedish="*";
norwegian="*";


activeButton="";

changeJsonOutput(language) {
  this.activeButton = language;
  localStorage.setItem("activeButton", language);
}


onClickedOutside() {
 // this.editStateId = -1;
  //alert('');
}

setItemsSession() {
  localStorage.setItem("items", JSON.stringify(this.items));
  //console.log('session changed');
}


 addItem() {
    this.items.push(
      {'key': this.key, 'english': this.english, 'swedish': this.swedish, 'norwegian': this.norwegian}
    );
    this.setItemsSession();
    this.key="VWS_";
    this.english="*";
    this.swedish="*";
    this.norwegian="*";
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.setItemsSession();
  }

  editStateId;

  editItem(item) {
    let index = this.items.indexOf(item);
    this.editStateId = (index === this.editStateId) ? -1 : index;
    this.setItemsSession();
  }


}
