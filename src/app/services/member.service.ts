import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, BASE_URL } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

    constructor(private http: HttpClient) { }
    
    registerMember(body:any)
    {
        return this.http.post(`${BASE_URL}${API.REGISTER}`,body)
    }

    loginMember(email:any,password:any)
    {
        let body = new HttpParams();
        body = body.set('email', email.toString());
        body = body.set('password', password.toString());
        return this.http.post(`${BASE_URL}${API.LOGIN}`,body)
    }

    getMembers(sport:any,country:any,state:any,city:any)
    {
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
            return this.http.get(`${BASE_URL}${API.GET_MEMBERS}/${sport}`)
        }
    }

    getMentors(sport:any,country:any,state:any,city:any)
    {
        if(city)
        {
            return this.http.get(`${BASE_URL}${API.GET_MENTORS}/${sport}/${country}/${state}/${city}`)
        }
        else if (state)
        {
            return this.http.get(`${BASE_URL}${API.GET_MENTORS}/${sport}/${country}/${state}`) 
        }
        else if (country)
        {
            return this.http.get(`${BASE_URL}${API.GET_MENTORS}/${sport}/${country}`)
        }
        else
        {
            return this.http.get(`${BASE_URL}${API.GET_MENTORS}/${sport}`)
        }
    }

    getSponsorships(email:any)
    {
        return this.http.get(`${BASE_URL}${API.GET_SPONSORSHIPS}/${email}`)
    }

    applySponsorship(name:any,email:any)
    {
        let body = new HttpParams();
        body = body.set('email', email.toString());
        body = body.set('name', name.toString());
        return this.http.post(`${BASE_URL}${API.APPLY_SPONSORSHIP}`,body)
    }

    getApplicants(name:any)
    {
        return this.http.get(`${BASE_URL}${API.GET_APPLICANTS}/${name}`)
    }
}