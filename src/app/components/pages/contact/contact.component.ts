import { Component, OnInit } from '@angular/core';
import { GetUserData } from 'src/app/models/getUserData';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user=GetUserData
  constructor() { }

  ngOnInit(): void {
  }

}
