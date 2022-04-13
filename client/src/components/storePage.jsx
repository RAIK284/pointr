import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import './styles/storePage.css';
import Trophy from "./trophy.jsx";
import InternalHeading from "./internalHeading.jsx";
import Button from '@mui/material/Button';
import TrophySingle from "./trophySingle.jsx";
import ball from './images/trophy-icons/ball.png'

//reference: https://mui.com/components/drawers/

class StorePage extends Component {
    constructor(props) {
        super(props);
        this.state =
            {trophies: [],
                trophyStatus: []}
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/storeItem')
            .then(response => response.json())
            .then((data) => {this.setState({trophies: data})})
            .then(() => {this.setState({trophyStatus : Array(this.state.trophies.length).fill(false)})})
    }

    changeState(index) {
        const status = this.state.trophyStatus;
        status[index] = !status[index];
        this.setState({trophyStatus: status})
        console.log(this.state)
    }
  
    render() {
        return (
            
            <React.Fragment>
            <HeaderDrawer index={2}></HeaderDrawer>
            <InternalHeading title="Store"></InternalHeading>

            <div className="storeBackground">
                <div id="fundsAmountWrapper">
                    <text id="fundsAmountText">FUNDs available:</text>
                    <var id="fundsAmountNum">20,000</var>
                </div>

                <div id="mostPopularDisplay">
                    
                    <text id="mostPopTitle">Today's Most Popular</text>
                    <text id="mostPopSubtitle">Explore today's most popular trophies!</text>
                    <div className="mpCard">
                        <text id="MPTitle">Crazy Crystal Ball</text>
                        <img src={ball} className="mostPopImg" onClick={()=> this.setState({trophySingle: true})}/> 
                    </div>
                    
                    
                </div>


                <div id="trophyDisplay">
                    <Trophy key={0} index={0} onClick={()=> {this.changeState(0)}} cost={100} image={"trophy"}></Trophy>
                    <TrophySingle key={0} trigger={this.state.trophyStatus[0]} title={"Trophy"} description={"This is a description"} cost={100} image={"trophy"}>
                        <div id="closeButtonWrapper">
                            <Button variant="text" id="closeButton" onClick={()=> {this.changeState(0)}}> X </Button>
                        </div>
                    </TrophySingle>


                    {this.state.trophies.map((trophy, i) => <Trophy key={i} index={i} onClick={()=> {this.changeState(i)}} cost={trophy.price} image={trophy.image}></Trophy>)}
                    {this.state.trophies.map((trophy, i) => <TrophySingle key={i} trigger={this.state.trophyStatus[i]} title={trophy.name} description={trophy.description} cost={trophy.price} image={trophy.image}>
                        <div >
                            <Button variant="text" id="closeButton" onClick={()=> {this.changeState(i)}}> X </Button>
                        </div>
                    </TrophySingle>)}
                </div>
            </div>
           
                
                    

                   

                    
                   

            
                    
            </React.Fragment>
        );
    }

    
}

export default StorePage;