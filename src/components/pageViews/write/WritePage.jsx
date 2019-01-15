import React, { Component } from 'react';
import { StoreContext } from '../../../ContextStore'
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
            typestart: 0,
            typenow: 0
        };
    }
    startCountdown() {
        this.setState({
            ft: this.state.ft,
            start: Date.now() - this.state.ft
        });
        this.fighttimer = setInterval(() => this.updateFight(), 1000);
    }
    typeTimer() {
        this.setState({
            typestart: new Date(),
            typenow: new Date()
        });
    }
    updateFight() {
        this.setState({ ft: Date.now() - this.state.start, typestart: new Date() });
        let time = Math.floor(this.state.ft / 1000);
        if (this.state.typenow !== 0) {
            let seconds = (this.state.typestart.getTime() - this.state.typenow.getTime()) / 1000;
            console.log(seconds)
            if (seconds > 15) this.toggleFight();
        }
        if (this.state.typenow === 0 && this.state.ft >= 15000) this.toggleFight();
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
            typestart: 0,
            typenow: 0,
            lastfight: this.state.monster,
            monster: {}
        });
    }
    toggleFight = () => {
        if (!this.state.fightpause) clearInterval(this.fighttimer);
        else {
            this.startCountdown();
            this.typeTimer();
        }
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
        if (this.state.fighting) this.setState({ typenow: new Date() });
        if (this.state.fightpause) this.toggleFight();
        let input = event.target.value;
        this.setState({ value: input });
        let words = input.match(/\b[-?(\w+)?]+\b/gi);
        if (Array.isArray(words)) this.setState({ count: words.length });
        else this.setState({ count: 0 });
        if (words !== null && this.state.fighting && words.length >= this.state.monster.wc)
            this.endFight("win");
    }
    getFightFraction() {
        if (this.state.fighting) {
            return (this.state.count / this.state.monster.wc) * 100;
        } else return 0
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

            var hDisplay = h > 0 ? h + (h === 1 ? " hr " : " hrs ") : "";
            var mDisplay = m > 0 ? m + (m === 1 ? " m " : " min ") : "";
            var sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "";
            return hDisplay + mDisplay + sDisplay;
        } else return "";
        //return d;
    }
    getMonsterClass(result, fraction) {
        let classes = ""
        if (result === "lost") classes += 'vitoryDance ';
        if (fraction % 10 === 1) classes += "grey" + fraction;
        return classes;
    }
    getMonsterSource() {
        if (this.state.monster.img) return this.state.monster.img;
        if (this.state.lastfight.img) return this.state.lastfight.img;
    }

    render() {
        const { fighting, count, monster, lastfight, result, fightpause } = this.state;
        const fraction = this.getFightFraction();
        const monsterclass = this.getMonsterClass(result, fraction);
        const src = this.getMonsterSource();
        const time = this.getPageTime();
        return (
            <StoreContext.Consumer>
            {({ monsters }) => (
                <div className="oldPaper">
              <form id="WriteForm" className="flex-wrap">
                 <div className="form-group col-sm-6">
                <button type="button" className="btn btn-secondary mr-1" data-toggle="modal" data-target="#MonsterModal" disabled={fighting}>Find Monster</button>
                <button type="button" className="btn btn-secondary mr-1" disabled={(!fighting )} onClick={this.toggleFight}>{fightpause ? "Continue" : "Pause"} Fight</button>
                WC: {count}
                 </div>
                 {(monster.img || lastfight.img) ? <MonsterFight src={src} fraction={fraction} fightState={result} paused={fightpause} lastfight={lastfight} time={time}/>: ''}
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