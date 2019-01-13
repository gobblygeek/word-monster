import React, { Component } from 'react';
import {StoreContext} from '../../../ContextStore'
import MonsterModal from './MonsterModal'
import MonsterFight from './MonsterFight'

class WritePage extends Component {
	constructor() {
	    super();
	    this.state = {
	      value: "",
	      count: 0,
	      fighting: false,
	      fightpause: false,
	      dopen: false,
	      monster: {},
	      lastfight: {},
	      result: "",
	      start: 0,
	      ft: 0,
        typestart:0,
        typenow:0
	    };
	}
  startCountdown() {
    this.setState({
      ft: this.state.ft,
      start: Date.now() - this.state.ft
    });
    this.fighttimer = setInterval(() => this.updateFight(), 1000);
  }
  typeTimer(){
    this.setState({
      typenow: 0,
      typestart: 0
    });
    this.typingTimer = setInterval(() => this.updateTT, 1000);
  }
  updateTT(){
    this.setState({ typenow: Date.now() - this.state.typestart })
    console.log(this.state.typenow,this.state.ft)
  }
  updateFight() {
    this.setState({ ft: Date.now() - this.state.start });
    let time = Math.floor(this.state.ft / 1000);
    if(this.state.typenow === 0 && this.state.ft >= 7000) this.toggleFight();
    console.log(this.state.typenow,this.state.ft)
    if (time >= this.state.monster.time) {
      this.endFight("loose");
    }
  }
  endFight(result) {
    if (result === "loose") this.setState({ result: "lost" });
    else this.setState({ result: "won" }); //win state update will go here.
    clearInterval(this.fighttimer);
    this.setState({
      fighting: false,
      start: 0,
      ft: 0,
      lastfight: this.state.monster,
      monster: {}
    });
  }
  toggleFight = () => {
    if (!this.state.fightpause) clearInterval(this.fighttimer);
    else this.startCountdown();
    this.setState({ fightpause: !this.state.fightpause });
  };
  repeatFight = () => {
    this.setState({
      fighting: true,
      monster: this.state.lastfight,
      lastfight: {}
    });
    this.startCountdown();
  };
  choseMonster(monster) {
    this.setState({ monster: monster, fighting: true });
    this.startCountdown();
  }
  handleChange(event) {
    if(this.state.fighting) this.typeTimer();
    let input = event.target.value;
    this.setState({ value: input });
    let words = input.match(/\b[-?(\w+)?]+\b/gi);
    if (Array.isArray(words)) this.setState({ count: words.length });
    else this.setState({ count: 0 });
    if (this.state.fighting && words.length >= this.state.monster.wc)
      this.endFight("win");
  }
  getFightFraction() {
    if (this.state.fighting) {
      return (this.state.count / this.state.monster.wc) * 100;
    }
    else return 0
  }
  getPageTime() {
    if (this.state.fighting) {
      let m = Math.floor(this.state.monster.time);
      let t = Math.floor(this.state.ft / 1000);
      let r = m - t;
      let formatted = this.getFormatedTime(r);
      return formatted;
    }
  }
  getFormatedTime(d) {
    if (this.state.fighting) {
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);
      var s = Math.floor((d % 3600) % 60);

      var hDisplay = h > 0 ? h + (h === 1 ? " h " : " hs ") : "";
      var mDisplay = m > 0 ? m + (m === 1 ? " m " : " ms ") : "";
      var sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "";
      return hDisplay + mDisplay + sDisplay;
    } else return "";
    //return d;
  }
    render() {
    	const {fighting, count,monster,result,fightpause} = this.state;
    	const fraction = this.getFightFraction();
		  const time = this.getPageTime();
        return (
        	<StoreContext.Consumer>
    				{({ monsters }) => (
        			  <div className="oldPaper">
    					<form id="WriteForm" className="flex-wrap">
    					   <div className="form-group col-sm-6">
	    					<button type="button" className="btn btn-secondary mr-1" data-toggle="modal" data-target="#MonsterModal" disabled={fighting}>Find Monster</button>
	    					<button type="button" className="btn btn-secondary mr-1" disabled={(!fighting || fightpause)} onClick={this.toggleFight}>Pause Fight</button>
	    					WC: {count}
    					   </div>
    					   {monster.img ? <MonsterFight src={monster.img} fraction={fraction} fightState={result} paused={fightpause} time={time}/>: ''}
    					   <MonsterModal monsters={monsters} choseMonster={monster => this.choseMonster(monster)} />
    					   <div className="form-group col-sm-12">
					    	<textarea className="form-control" id="WriteArea" name="WriteArea" onChange={event=> this.handleChange(event)} rows="13"></textarea>
					  	   </div>
					  	</form>
            </div>
	      			)}
  			</StoreContext.Consumer>
        )
    }
}
export default WritePage;