import React, { Component } from "react";
import ducky from "./images/ducky.png"
import "./styles/profileBox.css"
import PropTypes from 'prop-types';
import blake from "./images/profile-pictures/blake.png"
import wally from "./images/profile-pictures/wally.png"
import prema from "./images/profile-pictures/prema-cropped.png"
import shivani from "./images/profile-pictures/shivani.jpeg"
import keck from "./images/profile-pictures/keck.jpg"
import sam from "./images/profile-pictures/sam.png"


class ProfileBox extends Component {

    render() {
        const profileImages = {
            "blake": blake,
            "shivani": shivani,
            "prema": prema,
            "wally": wally,
            "keck": keck,
            "ducky": ducky,
            "sam": sam
        }

        console.log(this.props)

        if (this.props.otherProfile.image === undefined) {
            this.props.otherProfile.image = "ducky";
        }

      return (
        <React.Fragment>
          <div>
            {
            (this.props.index % 2 === 0)
            ?
              <div className="box1" onClick={()=>{window.location.href="/user/" + this.props.otherProfile.username}}>
                <img align="Left" id="image" alt="profilepic" src={profileImages[this.props.otherProfile.image]}/>
                <p className="name">@{this.props.otherProfile.username}</p>
                <p className="bio">{this.props.otherProfile.bio}</p>
              </div>
            :
            <div className="box2" onClick={()=>{window.location.href="/user/" + this.props.otherProfile.username}}>
                <img align="Left" id="image" alt="profilepic" src={profileImages[this.props.otherProfile.image]}/>
                <p className="name">@{this.props.otherProfile.username}</p>
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
    index: PropTypes.number
};
  export default ProfileBox;