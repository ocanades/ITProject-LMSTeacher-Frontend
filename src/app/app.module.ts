import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ChartsModule } from "ng2-charts";
import { NgxPaginationModule } from "ngx-pagination"; // also in  reviews.module
/* ngx-bootstrap */
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
/* components & modules*/
import { StudentFileModule } from "./Views/student-file/student-file.module";
import { StatisticsModule } from "./Views/statistics/statistics.module";
import { ReviewsModule } from "./Views/reviews/reviews.module";
import { ClassroomModule } from "./Views/classroom/classroom.module";
import { ClassroomVirtualModule } from "./Views/classroom-virtual/classroom-virtual.module";
import { ProjectModule } from './Views/project/project.module';
/* components */
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { LayoutComponent } from "./Components/layout/layout.component";
import { LoginModule } from "./Views/login/login.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoimagePipe } from "./Pipes/noimage.pipe";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { NotFoundComponent } from './Components/not-found/not-found.component';
/*HTTP API client*/
import { HttpClientModule, HttpClient } from "@angular/common/http";
/* Translation */
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    NoimagePipe,
    NotFoundComponent,
  ],
  imports: [
    BsDatepickerModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    ChartsModule,
    ModalModule.forRoot(),
    FontAwesomeModule,
    NgxPaginationModule,
    StudentFileModule,
    StatisticsModule,
    ReactiveFormsModule,
    ReviewsModule,
    ProjectModule,
    ClassroomModule,
    ClassroomVirtualModule,
    LoginModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        // useFactory: (http: Http) => 
        // new TranslateStaticLoader(http, './assets/i18n', '.json'),
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
