import React from 'react';
const MonsterFight = ({ fightState, time, repeatFight, monsterclass, fraction, altsrc, paused, src }) => (
        <div className="form-group col-sm-6 flex-wrap">
        <img src={src} alt="Monster being fought" className={monsterclass}  onError={this.src={altsrc}}/>
        {fightState === "" ? 
        (<div className="col-sm-6">{time} {paused ? 'Your fight is paused.' : '' }</div>) : (
        <div className="col-sm-6">
        You {fightState === "lost" ? "Lost" : "Won"}.
        <button className="btn btn-secondary" onClick={() => repeatFight}>Fight Again</button>
        </div>
)
}
<div className="progress col-sm-12">
          <div className="progress-bar bg-info" role="progressbar" style={{width: fraction+"%"}} aria-valuenow={fraction} aria-valuemin="0" aria-valuemax="100"></div>
        </div> <
/div>
)
export default MonsterFight