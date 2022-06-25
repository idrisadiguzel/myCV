import { Component, OnInit } from '@angular/core';
import { GetUserData } from 'src/app/models/getUserData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user=GetUserData
  constructor() { }

  ngOnInit(): void {
  }

}
