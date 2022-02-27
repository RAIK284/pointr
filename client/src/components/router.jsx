import { useHistory } from 'react-router-dom';
import React, { Component } from "react";
//import HomePage from "./homePage";
import SignIn from './signIn';
import {
    BrowserRouter,
    Routes,
    Route  } from "react-router-dom";
import HomePage from './homePage';
  
class WebsiteRouter extends Component {
    render() {
      return (
        <React.Fragment>
          <BrowserRouter>
            <Routes>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/" element={<HomePage/>}/>
            </Routes>
          </BrowserRouter>
        </React.Fragment>
      );
    }
  }
  export default WebsiteRouter;