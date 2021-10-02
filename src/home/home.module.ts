import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PipesModule } from "src/pipes/pipes.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule{

}