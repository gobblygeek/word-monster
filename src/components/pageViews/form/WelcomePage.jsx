import React from 'react';
import {StoreContext} from '../../../ContextStore'

const WelcomePage = () => (
	<StoreContext.Consumer>
    {(context) => (
        	<div className="card">
			  <img className="card-img-top" src="images/word_intro.jpg" alt="Word Monster Welcome"/>
			  <div className="card-body">
			    <p className="card-text">Hi! Welcome to Word Monster.</p>
			    <p className="card-text">If you’re like us, you want to write. If you’re also like us,
			            sometimes you’re so excited about writing, you kind of scare
			            yourself a little. You want it to be PERFECT. And, while it’s in
			            your head, it is. Once you try to get it out on paper, reality
			            creeps in and you freak a little.</p>
			    <p className="card-text">That’s where Word Monster steps in.</p>
			    <p className="card-text">Here, you can take on monsters. These little guys may look cute but
			            mark my words, each and every one of them wants to eat your story.
			            To defeat them, you write. As the words burst out, imagine beating
			            the crap out of these little guys, making sure that they—and the bad
			            guy who sent them after you—never harm a precious verb or noun.</p>
			    <p className="card-text"> Word by word, you’ll thwart the dark lord and his minions. And,
			            before you know it, your story will be further along.</p>
			    <p className="card-text">Will it be perfect? No. But it’ll exist and once it’s out of your
			            head it has a chance to grow into the awesome story you know it can
			            be.</p>
			    <p className="card-text">So, write on my friends. Kick these monster’s tushies. Face the dark
			            lord. Write your stories.</p>
			  </div>
			    {context.loggedIn ? "" : (
			    	<div className="card-footer">
    			    	<form onSubmit={context.doAuthentication}>
    					  <div className="form-group col-sm-4">
    					    <label htmlFor="login">Login</label>
    					    <input type="text" className="form-control" name="login" id="login" onChange={event => context.handleChange(event)} aria-describedby="userid goes here" placeholder="User ID" required />
    					  </div>
    					  <div className="form-group col-sm-4">
    					    <label htmlFor="Password">Password</label>
    					    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={event => context.handleChange(event)} required/>
    					  </div>
    					  <button type="submit" className="btn btn-primary col-sm-4">Log In</button>
    					</form>
    			  	</div>
    			)}
			</div>
        )
    }
  </StoreContext.Consumer>
);
export default WelcomePage;