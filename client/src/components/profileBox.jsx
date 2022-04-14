import React, { Component } from "react";
import ducky from "./images/ducky.png"
import "./styles/profileBox.css"
import PropTypes from 'prop-types';

class ProfileBox extends Component {
    render() {
      return (
        <React.Fragment>
          <div>
            {
            (this.props.index % 2 === 0)
            ?
              <div className="box1" onClick={()=>{window.location.href="/otherUser"}}>
                <img align="Left" id="image" alt="profilepic" src={ducky}/>
                <p className="name">@{this.props.username}</p>
                <p className="bio">{this.props.bio}</p>
              </div>
            :
            <div className="box2" onClick={()=>{window.location.href="/otherUser"}}>
                <img align="Left" id="image" alt="profilepic" src={ducky}/>
                <p className="name">@{this.props.username}</p>
                <p className="bio">{this.props.bio}</p>
              </div>

            }
          </div>
        </React.Fragment>
      );
    }
  }
  ProfileBox.propTypes = {
    index: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
};
  export default ProfileBox;