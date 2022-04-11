import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import './styles/storePage.css';
import Trophy from "./trophy.jsx";
import InternalHeading from "./internalHeading.jsx";
import Button from '@mui/material/Button';
import TrophySingle from "./trophySingle.jsx";

//reference: https://mui.com/components/drawers/

class StorePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            trophySingle : false
        }
    }
  
    render() {
        return (
            
            <React.Fragment>

        
            
                
           <HeaderDrawer index={2}></HeaderDrawer>
            <InternalHeading title="Store"></InternalHeading>
                
                    <div id="trophyDisplay" onClick={()=> this.setState({trophySingle: true})}>
                    
                        <Trophy className="storeDisplay"></Trophy>
                    </div>

                 
                    <TrophySingle trigger={this.state.trophySingle}>
                        <div >
                            <Button variant="text" id="closeButton" onClick={()=> this.setState({trophySingle: false})}> X </Button>
                        </div>
                    </TrophySingle>
                
                    

                   

                    
                   

            
                    
            </React.Fragment>
        );
    }

    
}

export default StorePage;