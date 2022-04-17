import React, { Component } from "react";
import ducky from "./images/ducky.png"
import "./styles/profileBox.css"
import PropTypes from 'prop-types';

class ProfileBox extends Component {

    render() {
        console.log(this.props)
      return (
        <React.Fragment>
          <div>
            {
            (this.props.otherProfile.id % 2 === 0)
            ?
              <div className="box1" onClick={()=>{window.location.href="/user/" + this.props.otherProfile.username}}>
                <img align="Left" id="image" alt="profilepic" src={ducky}/>
                <p className="name">@{this.props.otherProfile.name}</p>
                <p className="bio">{this.props.otherProfile.bio}</p>
              </div>
            :
            <div className="box2" onClick={()=>{window.location.href="/user/" + this.props.otherProfile.username}}>
                <img align="Left" id="image" alt="profilepic" src={ducky}/>
                <p className="name">@{this.props.otherProfile.name}</p>
                <p className="bio">{this.props.otherProfile.bio}</p>
              </div>

            }
          </div>
        </React.Fragment>
      );
    }
  }
  ProfileBox.propTypes = {
    otherProfile: PropTypes.object.isRequired,
};
  export default ProfileBox;