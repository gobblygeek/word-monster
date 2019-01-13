import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { navData } from '../../data/nav';
import {StoreContext} from '../../ContextStore'

class NavHead extends Component {
    constructor() {
        super();
        this.state = {
            links: []
        }
    }
    componentDidMount() {
        const links = navData;
        this.setState({ links })
    }
    getNavLinks(loggedIn) {
        return this.state.links.map((link) => {
            let classvalue = "nav-link";
            const linktest = "#"+link.link
            if(window.location.hash === linktest) classvalue += " active";
            if (!loggedIn) classvalue += " disabled";
            return (
                <li className="nav-item" key={link.label}> 
               		<Link className={classvalue} to={link.link}>{link.label} </Link>
	        	</li>
            )
        })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
      		<div className="collapse navbar-collapse" id="navbarToggle">
  				<StoreContext.Consumer>
    				{({ loggedIn }) => (
	      				<ul className="navbar-nav navbar-expand-lg nav-tabs mr-auto mt-2 mt-lg-0">
	      					{this.getNavLinks(loggedIn)}
	      				</ul>
	      		)}
  				</StoreContext.Consumer>
      		</div>
      		<a className="navbar-brand float-right" href="#">Word Monster</a>
		</nav>
        );
    }
}

export default NavHead;