import React, { Fragment } from 'react';

const MainLore = props => {
	return (
		<Fragment>
        <p>
          A hundred years before, the Dark Lord Mortimer tried to take over the
          world. A heroic band of heroes banded together and trapped him. Since
          then, Mortimer’s followers have been working to free him. They’ve just
          succeeded, releasing a creature that has spent years plotting against
          his enemies.
        </p>
        <p>
          Imagine his surprise to discover that they’ve died since then. How
          rude.
        </p>
        <p>
          Not one to be defied, the Dark Lord has turned his sights on their
          descendants, the only ones with the possibility of stopping him. Once
          he’s deposed of you, he will turn his sights on the world.
        </p>
        <p>
          Mortimer’s creatures have come to your town, looking for you. Find
          them. Fight them. Hunt the Dark Lord and put him back into his cage.
        </p>
        <div className="container">
		  <div className="row justify-center">
		    <img className="col-sm-10 col-lg-6"
		          src="images/dark_lord_place.jpg"
		          alt="creepy vitiorian house"
		        />
		  </div>
		</div>
      </Fragment>
    )
}
export default MainLore;