import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchChatComponent } from './main-page/search-chat/search-chat.component';
import { ChatListComponent } from './main-page/chat-list/chat-list.component';
import { CurrentChatComponent } from './main-page/current-chat/current-chat.component';
import { CurrentUserComponent } from './main-page/current-user/current-user.component';
import { UserProfileComponent } from './main-page/user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent,
    SearchChatComponent,
    ChatListComponent,
    CurrentChatComponent,
    CurrentUserComponent,
    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component: HomePageComponent },
      {path:'home', component: MainPageComponent}


    ]),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
