import { Injectable } from '@angular/core';

interface AdminDetails {
    id: number,
    name: string,
    description: string
}

interface Member{
    id: number,
    email: string,
    password: string,
    name: string,
    sport: string,
    bio: string,
    discordlink: string,
    country: string,
    state: string,
    city: string,
    mentor: boolean,
    admin: [AdminDetails]
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

    user: Member | undefined;
    login_status: boolean = false;

    constructor() {}

    setUser(member:any)
    {
        this.user = member
        this.login_status = true
    }

    getName() {
        return this.user?.name;
    }

    getUser()
    {
        return this.user
    }

    getLoginStatus()
    {
        return this.login_status
    }



}