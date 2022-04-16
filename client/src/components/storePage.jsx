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
<<<<<<< Updated upstream
        this.state={
            trophySingle : false
        }
=======
        this.state = {
            funds: 0,
            trophies: [],
            trophyStatus: [],
            mostPopularTrophyData: {},
            mostPopularTrophyStatus: false}
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/storeItem') .then(response => response.json()) .then((data) => {this.setState({
            trophies: data,
            trophyStatus : Array(data.length).fill(false)
        })})

        fetch('http://localhost:8080/api/mostPopularStoreItem')
            .then(response => response.json())
            .then((data) => fetch('http://localhost:8080/api/storeItem?name=' + data.name))
            .then(response => response.json())
            .then((data) => {this.setState({mostPopularTrophyData: data})})

        fetch('http://localhost:8080/api/user?username=bsimpleman')
            .then(response => response.json())
            .then(data => this.setState({
                funds: data.funds,
            }));
    }

    changeState(index) {
        const status = this.state.trophyStatus;
        status[index] = !status[index];
        this.setState({trophyStatus: status})
>>>>>>> Stashed changes
    }

    render() {
        return (

            <React.Fragment>




           <HeaderDrawer index={2}></HeaderDrawer>
            <InternalHeading title="Store"></InternalHeading>

            <div className="storeBackground">
                <div id="fundsAmountWrapper">
                    <text id="fundsAmountText">FUNDs available:</text>
                    <var id="fundsAmountNum">{this.state.funds}</var>
                </div>

                <div id="mostPopularDisplay">
                    
                    <text id="mostPopTitle">Today's Most Popular</text>
                    <text id="mostPopSubtitle">Explore today's most popular trophies!</text>
                    <div className="mpCard">
                        <text id="MPTitle">Crazy Crystal Ball</text>
                        <img src={ball} className="mostPopImg" onClick={()=> this.setState({trophySingle: true})}/> 
                    </div>
                    
                    
                </div>


                <div id="trophyDisplay" onClick={()=> this.setState({trophySingle: true})}>
                
                    <Trophy className="storeDisplay"></Trophy>
                </div>

                
                <TrophySingle trigger={this.state.trophySingle}>
                    <div >
                        <Button variant="text" id="closeButton" onClick={()=> this.setState({trophySingle: false})}> X </Button>
                    </div>
                </TrophySingle>
            </div>


                    

                   

                    
                   

            
                    
            </React.Fragment>
        );
    }

    
}

export default StorePage;