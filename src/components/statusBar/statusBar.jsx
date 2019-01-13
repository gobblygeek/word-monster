import React, { Component } from 'react';

class StatusBar extends Component {
	getUserData(){
		if(this.props.userData){
			const {userid, gold} = this.props.userData;
			if (!userid) return "Please Log In";
			else {
				return (
					<div className="card-text">
					{userid}: Gold: {gold}
					</div>
				)
			}
		}
	}
    render() {
        return (
        	<footer className="card bg-primary">
        		<div className="card-body col-sm-3">
			        <p className="card-text">&copy;2018 www.gobblygeek.com</p>
			    </div>
        		<div className="card-body col-sm-9">
			        {this.getUserData()}
			    </div>
    		</footer>
        )
    }
}
export default StatusBar;