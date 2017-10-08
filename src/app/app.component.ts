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

    this.editStateId = (localStorage.getItem('editStateId')) ? Number( localStorage.getItem('editStateId') ) : -1;

    this.key = (localStorage.getItem('key')) ? localStorage.getItem('key') : 'VWS_';
    this.english = (localStorage.getItem('english')) ? localStorage.getItem('english') : '*';
    this.swedish = (localStorage.getItem('swedish')) ? localStorage.getItem('swedish') : '*';
    this.norwegian = (localStorage.getItem('norwegian')) ? localStorage.getItem('norwegian') : '*';

}

setFieldSession(field, value) {
  localStorage.setItem(field, value);

}



items = [
  //{'key': 'demo', 'english': 'demo', 'swedish': 'demo', 'norwegian': 'demo'}
];

key;
english;
swedish;
norwegian;


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

    localStorage.setItem('key', "VWS_");
    localStorage.setItem('english', "*");
    localStorage.setItem('swedish', "*");
    localStorage.setItem('norwegian', "*");



    console.log( localStorage.getItem('norwegian') );
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.editStateId = -1;
    localStorage.setItem("editStateId", '-1');
    this.setItemsSession();
  }

  editStateId = -1;

  editItem(item) {
    let index = this.items.indexOf(item);
    this.editStateId = (index === this.editStateId) ? -1 : index;
    localStorage.setItem("editStateId", String(this.editStateId));
    this.setItemsSession();
  }

  removeAll() {
   
    this.items = [];
    localStorage.setItem("items", '');
   
    this.activeButton = 'English';
    localStorage.setItem("activeButton", 'English');

    this.editStateId = -1;
    localStorage.setItem("editStateId", '-1');


  }


}
