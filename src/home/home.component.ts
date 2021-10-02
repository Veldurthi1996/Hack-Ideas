import { Component, OnInit } from "@angular/core";
import { HackathonServices } from "src/sharedServices/hackathons.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{
    hackathonList: any;
    constructor(private hackathonServices: HackathonServices){
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
}