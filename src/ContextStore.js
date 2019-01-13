import React from "react";
import {userData} from './data/user.jsx'
import {monsters} from './data/monsters.jsx'

// Plain empty context
export const StoreContext = React.createContext();

// A component whose sole job is to manage
// the state of the Room
class Store extends React.Component {
  
    state = {
      user: {},
      loggedIn:true,
      monsters:[]
    }

	handleChange = (event) =>{
		const {name,value} = event.target;
		this.setState( {name: value })
	}
  	doAuthentication = () => {
	    let user = userData;
	    this.setState({loggedIn:true,user})
  	};

  componentDidMount() {
    //this.loadMonsters();
    this.setState({monsters})
  }
  render() {
    // Pass down the state and the onToggleLight action
    return (
      <StoreContext.Provider
        value={{
          	user: this.state.user,
      		loggedIn:this.state.loggedIn,
          	doAuthentication: this.doAuthentication,
          	handleChange: this.handleChange,
          	monsters:this.state.monsters
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}
export default Store;