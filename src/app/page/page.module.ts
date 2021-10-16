import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IndexComponent } from "./pages/index/index.component";
import { AzuraComponent } from './pages/azura/azura.component';
import { LevidreComponent } from './pages/levidre/levidre.component';
import { SaoriComponent } from './pages/saori/saori/saori.component';
import { InstallationOfGhostsComponent } from './pages/installation-of-ghosts/installation-of-ghosts.component';
import { MySaoriComponent } from './pages/saori/my-saori/my-saori.component';
import { SaoriCreationComponent } from './pages/saori/saori-creation/saori-creation.component';
import { UkagakaComponent } from './pages/ukagaka/ukagaka.component';
import { UpdateComponent } from './pages/update/update/update.component';
import { UpdateHistoryComponent } from './pages/update/update-history/update-history.component';

@NgModule({
  declarations: [
    IndexComponent,
    AzuraComponent,
    LevidreComponent,
    SaoriComponent,
    InstallationOfGhostsComponent,
    MySaoriComponent,
    SaoriCreationComponent,
    UkagakaComponent,
    UpdateComponent,
    UpdateHistoryComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    IndexComponent,
  ],
  providers: []
})
export class PageModule { }
