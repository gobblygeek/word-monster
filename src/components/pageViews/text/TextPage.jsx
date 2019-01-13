import React, { Component } from 'react';
import MainLore from './MainLore'

class TextPage extends Component {
    render() {
    	console.log(this.props)
        const page = this.props.location.pathname;
        return (
        	<div className="oldPaper">
            {(page === "/Legends") ? <MainLore />: ""}
            </div>
        )
    }
}
export default TextPage;