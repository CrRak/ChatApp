import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchChatComponent } from './main-page/search-chat/search-chat.component';
import { ChatListComponent } from './main-page/chat-list/chat-list.component';
import { CurrentChatComponent } from './main-page/current-chat/current-chat.component';
import { CurrentUserComponent } from './main-page/current-user/current-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent,
    SearchChatComponent,
    ChatListComponent,
    CurrentChatComponent,
    CurrentUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
