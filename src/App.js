import React from 'react';
import { AppContainer, ContentContainer } from './App.styles'
import { Switch, Route } from 'react-router-dom'
import SearchPage from './pages/search-page/search-page.component'
import UserPage from './pages/user-page/user-page.component'
import SignInAndSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component'
import Header from './component/header/header.component'



const App = () => {

  return (
    <AppContainer className="App">
      <Header />
      <ContentContainer>
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route path='/user/:userId' component={UserPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </ContentContainer>
    </AppContainer>
  );
}


export default App;