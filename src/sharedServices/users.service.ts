import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsersService{
    usersList : any = [
        'vreddy',
        'hreddy',
        'admin'
    ]

    getusers(){
        return this.usersList;
    }
}