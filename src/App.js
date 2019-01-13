import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import './custom.scss';
import {StoreContext} from './ContextStore'
import NavHead from './components/navHead/navHead.jsx'
import StatusBar from './components/statusBar/statusBar.jsx'
import { TextPage, FormPage, LinkPage, WritePage} from './components/pageViews'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

const App = () => (
  <StoreContext.Consumer>
    {({ loggedIn, user }) => (
      <div className="App">
        <NavHead />
        <Switch>
          <Route exact={true} path='/' render={() => (
            <FormPage pagePath="home" />
          )} />
          <PrivateRoute path='/Legends' authed={loggedIn} component={TextPage} />
          <PrivateRoute path='/Write' authed={loggedIn} component={WritePage} />
          <PrivateRoute path='/Den' authed={loggedIn}  component={LinkPage}/>
          <PrivateRoute path='/Explore' authed={loggedIn}  component={LinkPage}/>
          <PrivateRoute path='/Settings' authed={loggedIn}  component={FormPage} />
          </Switch>
        <StatusBar userData={user}/>
      </div>
  )}
  </StoreContext.Consumer>
);

export default App;
