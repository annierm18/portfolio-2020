import React, { Component } from "react";
// import WaterPlant from './waterPlant';
// import { Container, Row, Col } from "reactstrap";
// import { Link } from 'react-router-dom';

import '../../style/ProjectItem.scss';

import img from '../../assets/WaterMyPlantsPhoto.png';

export default class ProjectItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBack: false,
        }
        this.onItemClickHandler = this.onItemClickHandler.bind(this);
    }

    onItemClickHandler() {
        this.setState({showBack: !this.state.showBack});
    }

    render() {

    // const { img, name, index } = this.props.project;
    const showBack = this.state.showBack;

      
    return (
        <div className='water-my-plants' >
            <h1 className='water-my-plants__header'>Water My Plants</h1>
            <div onClick={this.onItemClickHandler} className='water-my-plants__block'>
                { showBack ? 
                    <div className='water-my-plants__block__back'>
                        Using a Raspberry Pi, Heroku, m2x IOT cloud service library, ReactJS, and Visual Studio Code, I built an application that allows users to click a button to water their plants and view live data from their plants
                    </div>
                :
                    <div onClick={this.onItemClickHandler} className='water-my-plants'>
                        <img src={img} alt="plant" className='water-my-plants__block__image'/>
                    </div>
                }  
                {/* <div className='plant-items-wrapper__plant__button'>
                    <Link to="/get-started"><button className='landing__button__start'>Water My Plant</button></Link>
                </div>   */}
            </div>  
        </div> 
        )
    }
}