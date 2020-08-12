import React from 'react';
import SearchBar from './component/search-bar/search-bar.component'
import { AppContainer } from './App.styles'
import ShowResult from './component/show-result/show-result.component'


const App = () => {

  return (
    <AppContainer className="App">
      <SearchBar />
      <ShowResult />
    </AppContainer>
  );
}


export default App;