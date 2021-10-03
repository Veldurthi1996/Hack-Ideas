import { Component, OnInit } from "@angular/core";
import { HackathonServices } from "src/sharedServices/hackathons.service";
import {  Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{
    hackathonList: any;
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

    addVote(Id: any){
        this.hackathonList.map((ele)=>{
            if(ele.id === Id){
                ele.votes++;
            }
        })
    }

    addHackathon(){
        this.route.navigate(['/hackathon']);
    }
}