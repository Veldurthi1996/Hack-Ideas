import { UpperCasePipe } from "./upperCase.pipe";
import { NgModule } from "@angular/core";
import { DatePipe } from "./date.pipe";

@NgModule({
    declarations: [DatePipe, UpperCasePipe],
    exports: [DatePipe, UpperCasePipe]
})
export class PipesModule {

}