import { useHistory } from 'react-router-dom';
import React, { Component } from "react";
//import HomePage from "./homePage";
import SignIn from './signIn';
import {
    BrowserRouter,
    Routes,
    Route  } from "react-router-dom";
import HomePage from './homePage';
import ProfilePage from './profilePage';
import SignUp from './signUp';
import MessagingPage from './messagingPage';
import StorePage from './storePage';
import ExplorePage from './explorePage'
import LeaderboardPage from './leaderboardPage'
import SettingsPage from './settingsPage'

class WebsiteRouter extends Component {
    render() {
      return (
        <React.Fragment>
          <BrowserRouter>
            <Routes>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/messages" element={<MessagingPage/>}/>
              <Route path="/store" element={<StorePage/>}/>
              <Route path="/explore" element={<ExplorePage/>}/>
              <Route path="/leaderboard" element={<LeaderboardPage/>}/>
              <Route path="/settings" element={<SettingsPage/>}/>
            </Routes>
          </BrowserRouter>
        </React.Fragment>
      );
    }
  }
  export default WebsiteRouter;