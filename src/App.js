import React from 'react';
import { AppContainer } from './App.styles'
import { Switch, Route } from 'react-router-dom'
import SearchPage from './pages/search-page/search-page.component'
import UserPage from './pages/user-page/user-page.component'



const App = () => {

  return (
    
      <Switch>
        <AppContainer className="App">
          <Route exact path='/' component={SearchPage} />
          <Route path='/user/:userId' component={UserPage} />
        </AppContainer>
      </Switch>
  );
}


export default App;