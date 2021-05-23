import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private username: string; 
private clientId = '3a42141d70dd1dd37d51';
private clientSecret = 'a32eb941345b75ac4d95fe571fc7c0cbe811558b';

  constructor(private http:HttpClient) { 
    this.username = "justusm10moringaschool"
  }
  //create a new function to get all profile data from github 
  getProfileData(){
    return this.http.get('https://api.github.com/users/justusm10moringaschool');
  }
  getProfileRepos(){
    return this.http.get('https://api.github.com/users/') + this.username + this.username + "/repos?clientId ='' + this.clientId" + "&clientSecret=" + this.clientSecret;
  }
}
