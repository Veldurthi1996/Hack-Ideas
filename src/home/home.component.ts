import { Component, OnInit } from "@angular/core";
import { HackathonServices } from "src/sharedServices/hackathons.service";
import {  Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{
    hackathonList: any;
    isUserAuthenticated: boolean = false;

    constructor(private hackathonServices: HackathonServices,
                private route: Router){
    }

    ngOnInit(){
       this.hackathonList = this.hackathonServices.getHackathonData();
    }

    sortHackathons(sortBy: string){
        this.hackathonList.sort((a,b) => {
            if(a[sortBy] > b[sortBy]){
                return -1;
            }
        });
    }

    addVote(Id: any,i:any){
        this.hackathonList.map((ele)=>{
            if(ele.id === Id){
                ele.votes++;
            }
        });
        document.getElementById('vote-'+i).setAttribute('disabled','disabled');
        document.getElementById('vote-'+i).style.background = 'url(../assets/thumbs_up_black.png)';
        document.getElementById('vote-'+i).style.backgroundSize = 'cover';
    }

    addHackathon(){
        this.isUserAuthenticated = (sessionStorage.getItem('isUserAuthenticated') === 'true') ? true : false;
        if(this.isUserAuthenticated)
            this.route.navigate(['/hackathon']);
        else
            this.route.navigate(['']);
    }
}