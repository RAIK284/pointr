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
import SignUp from './singUp';
import MessagingPage from './messagingPage';
import StorePage from './storePage';
import LeaderBoardPage from './leaderboardPage';
import SettingsPage from './settingsPage';
import ExplorePage from './explorePage';
  
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
              <Route path="/leaderboard" element={<LeaderBoardPage/>}/>
              <Route path="/settings" element={<SettingsPage/>}/>
              <Route path="/explore" element={<ExplorePage/>}/>
            </Routes>
          </BrowserRouter>
        </React.Fragment>
      );
    }
  }
  export default WebsiteRouter;