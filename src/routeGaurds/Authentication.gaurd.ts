import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGaurd implements CanActivate{

    constructor(private route: Router){

    }

    canActivate(){
        let auth = (sessionStorage.getItem('isUserAuthenticated') === 'true') ? true : false;
        if(!auth)
            this.route.navigate(['']);
        return auth;
    }
}