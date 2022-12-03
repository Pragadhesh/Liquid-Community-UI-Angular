import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, BASE_URL } from '../constants/api-constants';
;
@Injectable({
  providedIn: 'root'
})
export class MemberService {

    constructor(private http: HttpClient) { }

    getMembers(sport:any,country:any,state:any,city:any)
    {
        console.log("Entered get members");
        if(city)
        {
            return this.http.get(`${BASE_URL}${API.GET_MEMBERS}/${sport}/${country}/${state}/${city}`)
        }
        else if (state)
        {
            return this.http.get(`${BASE_URL}${API.GET_MEMBERS}/${sport}/${country}/${state}`) 
        }
        else if (country)
        {
            return this.http.get(`${BASE_URL}${API.GET_MEMBERS}/${sport}/${country}`)
        }
        else
        {
            console.log("ppp")
            return this.http.get(`${BASE_URL}${API.GET_MEMBERS}/${sport}`)
        }
    }
}