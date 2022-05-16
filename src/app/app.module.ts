import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { UserServiceService } from './userservice.service';
// import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { EmployeeService } from './employee.service'; 
import { MatButtonModule, } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card' 
import { MatRadioModule } from '@angular/material/radio';  
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
  




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ShopComponent,
    MenComponent,
    WomenComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    UserRegistrationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule
  ],
  providers: [HttpClientModule,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
