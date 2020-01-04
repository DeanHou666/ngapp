import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/Forms'

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { DataComponent } from './components/data/data.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DataComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
