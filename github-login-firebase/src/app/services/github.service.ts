import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http : HttpClient) { }

  getUserDetails(userName : string){
    return this.http.get(`https://api.github.com/users/${userName}`) //without username api wont work
  }

  getRepos(repoUrl : string){
    return this.http.get(repoUrl); //this will help us to extract repository of user using repourl provided
  }
}
