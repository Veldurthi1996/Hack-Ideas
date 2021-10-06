import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements OnInit {
    navList: any = [{
        category: 'home',
        path: '/home'
    },
    {
        category: 'hackathon',
        path: '/hackathon'
    }]
    constructor(private route: Router){

    }

    ngOnInit(){
        this.navList = this.navList.map((ele) => {
            if(location.href.indexOf(ele.path) > 0){
                ele.isActive = true;
            }else{
                ele.isActive = false;
            }
            return ele;
        });
    }

    logoutBtn(){
        sessionStorage.removeItem('isUserAuthenticated');
        this.route.navigate(['']);
    }
}