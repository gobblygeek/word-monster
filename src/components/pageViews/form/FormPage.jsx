import React, { Component } from 'react';
import WelcomePage from './WelcomePage'

class FormPage extends Component {
    render() {
    	const {pagePath} = this.props;
        return (
        	<div className="homeTown">
            {(pagePath === "home") ? <WelcomePage />: ""}
            </div>
        )
    }
}
export default FormPage;