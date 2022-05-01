import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import './styles/storePage.css';
import Trophy from "./trophy.jsx";
import InternalHeading from "./internalHeading.jsx";
import Button from '@mui/material/Button';
import TrophySingle from "./trophySingle.jsx";
import ball from './images/trophy-icons/ball.png'
import ducky from './images/ducky.png'
import dice from './images/trophy-icons/dice.png'
import trophy from './images/trophy-icons/trophy.png'
import star from './images/trophy-icons/star.png'
import crystal from './images/trophy-icons/crystal.png'
import clover from './images/trophy-icons/clover.png'
import sword from './images/trophy-icons/sword.png'
import prize from './images/trophy-icons/prize.png'
import MostPopular from "./mostPopular.jsx";
import root from '../root'

//reference: https://mui.com/components/drawers/

class StorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            funds: -1,
            trophies: [],
            trophyStatus: [],
            mostPopularTrophyData: {userList: []},
            mostPopularTrophyStatus: false}
    }

    updateData() {
        fetch(`${root}/api/user/self`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        })
            .then(response => response.json())
            .then(data => this.setState({
                username: data.username,
                funds: data.funds
            }))
    }

    componentDidMount() {
        fetch(`${root}/api/user/self`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        })
            .then(response => response.json())
            .then(data => this.setState({
                username: data.username,
                funds: data.funds
            }))

        fetch(`${root}/api/storeItem`) .then(response => response.json()) .then((data) => {this.setState({
            trophies: data,
            trophyStatus : Array(data.length).fill(false)
        })})

        fetch(`${root}/api/mostPopularStoreItem`)
            .then(response => response.json())
            .then((data) => fetch(`${root}/api/storeItem?name=${data.name}`))
            .then(response => response.json())
            .then((data) => {this.setState({mostPopularTrophyData: data})})
            .then(() => console.log(this.state))
    }

    changeState(index) {
        const status = this.state.trophyStatus;
        status[index] = !status[index];
        this.setState({trophyStatus: status})
        fetch(`${root}/api/user/self`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        })
            .then(response => response.json())
            .then(data => this.setState({
                username: data.username,
                funds: data.funds
            }))

    }
  
    render() {

        const imageObjects = {
            "ball": ball,
            "star" : star,
            "dice": dice,
            "crystal": crystal,
            "trophy": trophy,
            "crystal": crystal,
            "clover": clover,
            "prize": prize,
            "sword": sword
        }

        return (
            
            <React.Fragment>
            <HeaderDrawer index={2}></HeaderDrawer>
            <InternalHeading title="Store"></InternalHeading>

            <div className="storeBackground">
                <div id="fundsAmountWrapper">
                    <text id="fundsAmountText">FUNDs available:</text>
                    <var id="fundsAmountNum" data-testid="userFUNds">{this.state.funds}</var>
                </div>

                <div id="mostPopularDisplay">
                    <text id="mostPopTitle">Today's Most Popular</text>
                    <text id="mostPopSubtitle">Explore today's most popular trophies!</text>
                    <div className="mpCard">
                        <text id="MPTitle" data-testid="MPTitle">{this.state.mostPopularTrophyData.name}</text>
                        <img alt="most popular trophy" data-testid="mostPopTroph" src={imageObjects[this.state.mostPopularTrophyData.image]} className="mostPopImg" onClick={()=> this.setState({mostPopularTrophyStatus: true})}/>
                    </div>
                </div>


                <div id="trophyDisplay" data-testid="trophyBox">
                    {this.state.funds !== -1 ?
                    this.state.trophies.map((trophy, i) => <Trophy key={i} data-testid='singleTrophy' index={i} onClick={()=> {this.changeState(i)}} cost={trophy.price} image={trophy.image}></Trophy>)
                        : ""}
                    {this.state.funds !== -1 ?
                    this.state.trophies.map((trophy, i) => <TrophySingle key={i}
                                                                          data-testid='singleTrophy'
                                                                          trigger={this.state.trophyStatus[i]}
                                                                          onClick={()=> {this.changeState(i)}}
                                                                          title={trophy.name} description={trophy.description}
                                                                          cost={trophy.price} image={trophy.image}
                                                                          userFunds={this.state.funds}
                                                                          storePage={this}
                                                                          username={this.state.username}>
                    </TrophySingle>) : ""}

                    {this.state.mostPopularTrophyData.hasOwnProperty('name') ?

                    <MostPopular trigger={this.state.mostPopularTrophyStatus}
                                 onClick={()=> this.setState({mostPopularTrophyStatus: false})}
                                 title={this.state.mostPopularTrophyData.name}
                                 image={this.state.mostPopularTrophyData.image}
                                 users={this.state.mostPopularTrophyData.userList}></MostPopular> : ""}

                    {/*    <TrophySingle*/}
                    {/*        trigger={this.state.mostPopularTrophyStatus}*/}
                    {/*        onClick={()=> this.setState({mostPopularTrophyStatus: false})}*/}
                    {/*        title={this.state.mostPopularTrophyData.name}*/}
                    {/*        description={this.state.mostPopularTrophyData.description}*/}
                    {/*        cost={this.state.mostPopularTrophyData.price}*/}
                    {/*        image={this.state.mostPopularTrophyData.image}*/}
                    {/*        userFunds={this.state.funds}*/}
                    {/*        username={this.state.username}>*/}
                    {/*    </TrophySingle> : ""}*/}
                </div>
            </div>
           
                
                    

                   

                    
                   

            
                    
            </React.Fragment>
        );
    }

    
}

export default StorePage;