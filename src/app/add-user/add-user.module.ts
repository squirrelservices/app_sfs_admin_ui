import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from "@angular/forms";
import { AddUserComponent } from './add-user.component';
@NgModule({
    imports: [
        CommonModule,
        PanelModule,
        ReactiveFormsModule
    ],
    declarations: [AddUserComponent],
    providers: [DatePipe]
})

export class AddUserModule {

    constructor() {
    }

}
