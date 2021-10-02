import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UsersService } from '../sharedServices/users.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './Login.component.html'
})
export class LoginComponent implements OnInit {

    usersList: any;
    isUserAuthenticated: boolean;
    errorMessage: String;
    isInvalidUser: boolean = false;

    constructor( private users: UsersService,
                 private route: Router){}

    ngOnInit(){
        this.usersList = this.users.getusers();
    }

    validateUser(formDetails: NgForm){
        console.log(formDetails.value.username);
        if(this.usersList.includes(formDetails.value.username)){
            this.isUserAuthenticated = true;
            this.route.navigate(['/home']);
        }else{
            this.isInvalidUser = true;
            this.errorMessage = 'Please Enter valid UserName';
            formDetails.reset();
        }
    }
}