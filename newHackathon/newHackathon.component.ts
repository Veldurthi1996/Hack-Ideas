import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HackathonServices } from "../sharedServices/hackathons.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-new-hackathon',
    templateUrl: 'newHackathon.component.html'
})
export class NewHackathonComponent implements OnInit{

    features: string[] = [
        'Tech',
        'Supprot',
        'HR'
    ];

    errorMessage: string[] = [];
    invalidInputs: boolean=false;

    constructor(private hackathonServices: HackathonServices,
                private route: Router){
    }

    ngOnInit(){
    }

    addNewHackathon(hackathonDetails: NgForm){
        this.invalidInputs = false;
        this.errorMessage = [];
        if(!hackathonDetails.value.hack_title){
            this.errorMessage.push('Please Enter Title');
            this.invalidInputs = true;
        }
        if(!hackathonDetails.value.hack_feature){
            this.errorMessage.push('Please Select Feature for hackathon');
            this.invalidInputs = true;
        }
        if(!hackathonDetails.value.hack_description){
            this.errorMessage.push('Description cannot be empty');
            this.invalidInputs = true;
        }
        if(!this.invalidInputs){
            let newHackathon = {
                title: hackathonDetails.value.hack_title,
                feature: hackathonDetails.value.hack_feature,
                description: hackathonDetails.value.hack_description,
                votes: 0,
                creationDate: new Date().getTime()
    
            }
            this.hackathonServices.setHackathon(newHackathon);
            hackathonDetails.reset();
            this.route.navigate(['/home']);
        }
    }
}