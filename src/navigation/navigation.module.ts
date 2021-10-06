import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation.component";
import { RouterModule } from "@angular/router";
import { PipesModule } from "src/pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PipesModule
    ],
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
})
export class NavigationModule {

}