import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ResultTableComponent } from './result-table/result-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatInputModule } from '@angular/material/input';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AuthService } from './service/auth.service';
import { FileIconComponent } from './icons/file-icon/file-icon.component';
import { NodeNetworkComponent } from './visualization/node-network/node-network.component'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { LogoutComponent } from './logout/logout.component'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { WordCloudComponent } from './visualization/word-cloud/word-cloud.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SearchbarComponent,
    ResultTableComponent,
    ResultDetailsComponent,
    MainpageComponent,
    FileIconComponent,
    NodeNetworkComponent,
    LogoutComponent,
    WordCloudComponent
  ],
  imports: [
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatTreeModule,
    MatExpansionModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatCheckboxModule
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]  
})
export class AppModule { 
  
}
