import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


items = [
  //{'key': 'demo', 'english': 'demo', 'swedish': 'demo', 'norwegian': 'demo'}
];

key = "VWS_";
english="*";
swedish="*";
norwegian="*";


activeButton="Swedish";

changeJsonOutput(language) {
  this.activeButton = language;
}


onClickedOutside() {
 // this.editStateId = -1;
  //alert('');
}


 addItem() {
    this.items.push(
      {'key': this.key, 'english': this.english, 'swedish': this.swedish, 'norwegian': this.norwegian}
    );
    this.key="VWS_";
    this.english="*";
    this.swedish="*";
    this.norwegian="*";
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  editStateId;

  editItem(item) {
    let index = this.items.indexOf(item);

    this.editStateId = (index === this.editStateId) ? -1 : index;



  }


}
