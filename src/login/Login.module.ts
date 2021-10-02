import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./Login.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent],
})
export class LoginModule {

}