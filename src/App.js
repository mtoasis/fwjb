import React from 'react';
import { AppContainer } from './App.styles'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import SearchPage from './pages/search-page/search-page.component'
import UserPage from './pages/user-page/user-page.component'



const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <AppContainer className="App">
          <Route exact path='/' component={SearchPage} />
          <Route path='/user/:userId' component={UserPage} />
        </AppContainer>
      </Switch>
    </BrowserRouter>
  );
}


export default App;