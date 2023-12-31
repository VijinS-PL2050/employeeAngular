import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  public loginVerify(user:User){
    //calling the api for checking username and password
    return this.httpClient.get<User>(environment.apiUrl+'/api/user/'+user.userName+'&'+user.password);
  }
  fetchValues(user:User): void {
    this.httpClient.get<User>(environment.apiUrl+'/api/users/'+user.userName+'&'+user.password).subscribe(response => {
      // Check the status code
      if (response.status === 200) {
        const role = response.data.role;
        const accessToken = response.data.AccessToken;
        const userName = response.data.UserName;
  
        // Do something with the values
        console.log(role, accessToken, userName);
      } else {
        // Handle error if necessary
        console.error(response.error);
      }
    });
}
}

