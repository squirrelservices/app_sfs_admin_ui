import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app.routing";
import { AuthenticationService } from "./service/auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarModule } from 'primeng/sidebar';
import { ChartModule } from 'primeng/chart';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from "./list-user/list-user.component";
import { VendorListComponent } from "./vendor-list/vendor-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddVendorDetailsComponent } from "./add-vendor-details/add-vendor-details.component";
import { UserService } from "./service/user.service";
import { OrderService } from "./service/order.service";

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    VendorListComponent,
    DashboardComponent,
    AddVendorDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    ChartModule,
    PanelModule,
    MegaMenuModule,
    RadioButtonModule,
    TableModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule
  ],
  providers: [AuthenticationService, UserService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
