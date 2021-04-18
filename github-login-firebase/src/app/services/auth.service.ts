import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : AngularFireAuth) { }

  signUp(email: string, password:string){
    return this.auth.createUserWithEmailAndPassword(email, password) // this will return an observable that we can subscribe.
  }

  signIn(email : string, password : string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  getUser(){
    return this.auth.authState;  //its a object retur to you u by firebase if there is successful login
  }

  signOut(){
    return this.auth.signOut();
  }
}
