import { Injectable } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { GetUserData } from '../models/getUserData';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public database:Database) { }

  getUser(userName: string){
    const startConfRef = ref(this.database, `user/${userName}`);
    onValue(startConfRef, (snapshot)=>{
      const data:User = snapshot.val();
      GetUserData.email=data.email;
      GetUserData.firstName=data.firstName;
      GetUserData.lastName=data.lastName;
      GetUserData.degree=data.degree;
      GetUserData.linkedinLink=data.linkedinLink;
      GetUserData.githubLink=data.githubLink;
      GetUserData.mediumLink=data.mediumLink;
      GetUserData.steamLink=data.steamLink;
      GetUserData.instagramLink=data.instagramLink;


    })
  }
}
