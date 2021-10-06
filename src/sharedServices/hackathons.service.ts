import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HackathonServices {
    hackathonList = [
        {
            id: 100,
            title: 'angular',
            feature:'tech',
            description: `24 hours of instructor-led Hackathon including 2.5 hours of presentations and demos
            Hands-on learning of development, test and deployment of web-applications
            Learn main features of the latest version of Angular
            Follow-ups are included, 1/3 of the time is spent on lectures
            2/3 is spent practicing!, Get Help
            Several helpers are ready to assist anyone who is stuck at a challenge, not sure where to start or has other questions . The head instructor provides guidance to the participants, explains the main concepts.
            Online or In-Person We run both online and in-person hackathons. The material doesn’t change, the challenges are the same. We can adjust the hours for the online hackathon to make sure that everyone is actively engaged.`,
            votes: 5,
            creationDate: new Date('5/15/2019 5:30:0').getTime()
        },
        {
            id: 101,
            title: 'javascript',
            feature:'tech',
            description: `24 hours of instructor-led Hackathon including 2.5 hours of presentations and demos
            Hands-on learning of development, test and deployment of web-applications
            Learn main features of the latest version of Angular
            Follow-ups are included, 1/3 of the time is spent on lectures
            2/3 is spent practicing!, Get Help
            Several helpers are ready to assist anyone who is stuck at a challenge, not sure where to start or has other questions . The head instructor provides guidance to the participants, explains the main concepts.
            Online or In-Person We run both online and in-person hackathons. The material doesn’t change, the challenges are the same. We can adjust the hours for the online hackathon to make sure that everyone is actively engaged.`,
            votes: 0,
            creationDate: new Date('5/25/2020 14:27:0').getTime()
        },
        {
            id: 102,
            title: '.net',
            feature:'tech',
            description: `24 hours of instructor-led Hackathon including 2.5 hours of presentations and demos
            Hands-on learning of development, test and deployment of web-applications
            Learn main features of the latest version of Angular
            Follow-ups are included, 1/3 of the time is spent on lectures
            2/3 is spent practicing!, Get Help
            Several helpers are ready to assist anyone who is stuck at a challenge, not sure where to start or has other questions . The head instructor provides guidance to the participants, explains the main concepts.
            Online or In-Person We run both online and in-person hackathons. The material doesn’t change, the challenges are the same. We can adjust the hours for the online hackathon to make sure that everyone is actively engaged.`,
            votes: 15,
            creationDate: new Date('6/20/2019 1:21:15').getTime()
        },
        {
            id: 103,
            title: 'Java',
            feature:'tech',
            description: `24 hours of instructor-led Hackathon including 2.5 hours of presentations and demos
            Hands-on learning of development, test and deployment of web-applications
            Learn main features of the latest version of Angular
            Follow-ups are included, 1/3 of the time is spent on lectures
            2/3 is spent practicing!, Get Help
            Several helpers are ready to assist anyone who is stuck at a challenge, not sure where to start or has other questions . The head instructor provides guidance to the participants, explains the main concepts.
            Online or In-Person We run both online and in-person hackathons. The material doesn’t change, the challenges are the same. We can adjust the hours for the online hackathon to make sure that everyone is actively engaged.`,
            votes: 10,
            creationDate: new Date('1/5/2021 6:45:35').getTime()
        }
    ];

    getHackathonData(){
        return this.hackathonList;
    }

    setHackathon(newhackathon){
        newhackathon = { id: this.getrecentId()+1, ...newhackathon};
        this.hackathonList.push(newhackathon);
    }

    getrecentId(){
        return this.hackathonList.reduce((res,ele) => {
            res = ele.id > res ? ele.id : res;
            return res;
        },0);
    }
}