import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewHackathonComponent } from "./newHackathon.component";

@NgModule({
    imports:[
        FormsModule,
        CommonModule
    ],
    declarations:[NewHackathonComponent],
    exports: [NewHackathonComponent]
})
export class NewHackathonModule{

}