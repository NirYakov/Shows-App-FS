import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.css']
})
export class SingleShowComponent implements OnInit {

  showTitle = "Show Title";
  shortAboutShow = "About the show ...";
  myShowReview = "i think its great show , liked the story and characters"
  number = 2;

  constructor() { }

  ngOnInit() {
  }

}
