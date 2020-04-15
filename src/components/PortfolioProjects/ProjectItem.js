import React, { Component } from "react";
// import WaterPlant from './waterPlant';
// import { Container, Row, Col } from "reactstrap";
// import { Link } from 'react-router-dom';

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

    const pStyle = {
        width: "220px"
      };

      const iStyle = {
        width: "220px",
        paddingTop: "30px"
      };

    return (
        <div>
            <h1>Water My Plants</h1>
            <div onClick={this.onItemClickHandler} className='plant-items-wrapper__plant'>
                { showBack ? 
                    <div style={iStyle}  className='plant-items-wrapper__plant__back'>
                        <h1>Using a Raspberry Pi, Heroku, m2x IOT cloud service library, ReactJS, and Visual Studio Code, I built an application that allows users to click a button to water their plants and view live data from their plants </h1>
                    </div>
                :
                    <div onClick={this.onItemClickHandler} className='plant-items-wrapper__plant__front'>
                        {/* <img src={img} alt="plant" className='plant-items-wrapper__plant__front__plant-image'/> */}
                        <p>img placeholder</p>
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