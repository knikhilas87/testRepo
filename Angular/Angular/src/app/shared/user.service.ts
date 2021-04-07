import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationForm } from '../model/application-form.model';
import { User } from '../model/user.model';

@Injectable()
export class ServiceComponent {
  readonly rootUrl = 'http://localhost:58177';
  constructor( private http: HttpClient) {}

  registerUser(user: User){
 const body: User = {
   UserName: user.UserName,
   Password: user.Password,
   Email: user.Email,
   FirstName: user.FirstName,
   LastName: user.LastName
 };
 return this.http.post(this.rootUrl +'/api/Account/Register', body);
  }

  applicationForm(applicationForm: ApplicationForm){
    const body: ApplicationForm = {
      PartnerName: applicationForm.PartnerName,
      NoOfInsured: applicationForm.NoOfInsured,
      NoOfSeniorInsured: applicationForm.NoOfSeniorInsured,
      Revenue: applicationForm.Revenue,
      Year: applicationForm.Year,
      ListType: applicationForm.ListType
    };
    return this.http.post(this.rootUrl +'/api/NBDetails/OnSaveApplication', body);
     }

  userAuthentication(username, password){
   const data = 'username='+username+'&password='+password+'&grant_type=password';
   const requestHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
   return this.http.post(this.rootUrl+'/token',data,{headers: requestHeader});
  }

  GetApplicationDetails(listType, fromDate, toDate){
    let data;
    if (fromDate && toDate) {
     data = 'listtype='+listType+'&fromDate='+fromDate+'&toDate='+toDate;
    } else {
      data = 'listtype='+listType;
    }
     const requestHeader = new HttpHeaders({Authorization : 'Bearer '+ localStorage.getItem('userToken')});
    return this.http.get(this.rootUrl+'/api/NBDetails/GetApplicationDetails?'+data,{headers: requestHeader},);
   }
}
