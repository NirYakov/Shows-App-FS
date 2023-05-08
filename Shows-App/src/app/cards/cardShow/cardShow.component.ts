import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardShow',
  templateUrl: './cardShow.component.html',
  styleUrls: ['./cardShow.component.scss']
})
export class CardShowComponent implements OnInit {

  @Input() myText = "Default Msg";

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log("Clicked! " + this.myText);
  }

}
