import React from 'react';
const MonsterFight = ({fightState,time,repeatFight,fraction,fightpause,src}) => (
	<div className="form-group col-sm-6 flex-wrap">
    	<img src={src} />
    	{fightState === "" ? 
    	(<div className="col-sm-6">{time}{fightpause ? 'Your fight is paused' : '' }</div>) : (
    	<div className="col-sm-6">
    	You {fightState === "lost" ? "Lost" : "Won"}.
    	<button className="btn btn-secondary" onClick={() => repeatFight}>Fight Again</button>
    	</div>
    	)}
		<div className="progress col-sm-12">
		  <div className="progress-bar bg-info" role="progressbar" style={{width: fraction}} aria-valuenow={fraction} aria-valuemin="0" aria-valuemax="100"></div>
		</div>
   </div>
	)
export default MonsterFight