import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ProfileBox from './profileBox'

// reference: https://github.com/express-labs/pure-react-carousel
class ProfileList extends React.Component {
    render() {
        const profileData = [["bobby", "hello there!"], 
            ["cool guy", "i am super cool"], 
            [ "cool gal", "I am literally the coolest"], 
            ["who is this?", "I am a mystery at large"], 
            ["who let the dogs out?", "Idk who?"], 
            ["Who? Who", "who what when where how?"]]
        return (
            <React.Fragment>
                    <List>
                        {profileData.map((text, index) => (
                            <div>
                            {
                                (index < this.props.numProfiles) 
                                ?
                                <ListItem>
                                    <ProfileBox username={text[0]} bio={text[1]} index={index}/>
                                </ListItem>
                                :
                                false
                            }
                            </div>
                            ))}
                        </List>
            </React.Fragment>
        );
    }
  }

  ProfileList.propTypes = {
    numProfiles: PropTypes.number.isRequired,
};

  export default ProfileList;