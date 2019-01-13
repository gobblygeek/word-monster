import React from 'react';
const MonsterModal = (props) => (
	<div className="modal fade" id="MonsterModal" tabIndex="-1" role="dialog" aria-labelledby="MonsterModalLabel" aria-hidden="true">
	  <div className="modal-dialog" role="document">
	    <div className="modal-content">
	      <div className="modal-header bg-secondary">
	        <h5 className="modal-title" id="MonsterModalLabel">Monsters of Suburbia</h5>
	        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div className="modal-body flex-wrap">
	        {props.monsters.map(monster => {
		        return (
		          <figure key={monster.id} className="col-md-4 col-sm-2 p-2">
		            <img src={monster.img} alt="Monster" />
		            <figcaption>
		              {monster.name}
		              <br /> WC:{monster.wc}
		              <br /> Time:{monster.time}
		              <button className="btn btn-primary ml-1" data-dismiss="modal" onClick={() => {props.choseMonster(monster)}}>Fight</button>
		            </figcaption>
		          </figure>
		        );
      		})}
	      </div>
	    </div>
	  </div>
	</div>
	)
export default MonsterModal