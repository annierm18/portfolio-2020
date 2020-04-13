import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../style/navigation.scss';

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to ={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };

   

        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to ="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to ="/about-me" activeClassName="nav-link-active">About</NavLink>
                    </div>

                </div>

                <div className="right-side">
                AINE FITZGERALD COLEMAN

                </div>
            </div>
        );
    }

    export default withRouter(NavigationComponent);