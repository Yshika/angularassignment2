import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModuleModule } from './user-module/user-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceService } from './shared-service.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    NgbModule,
    //NgbModule.forRoot()
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
