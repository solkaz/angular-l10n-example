import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import {
  L10nConfig,
  L10nLoader,
  L10nTranslationModule,
  L10nIntlModule
} from "angular-l10n";
import { l10nConfig, initL10n } from "./l10n-config";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { PipeComponent } from './pipe/pipe.component';
import { DirectiveComponent } from './directive/directive.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    L10nTranslationModule.forRoot(l10nConfig),
    L10nIntlModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PipeComponent,
    DirectiveComponent,
    ApiComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
