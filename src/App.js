import React, { useState, useEffect } from 'react';
import SearchBar from './component/search-bar/search-bar.component'
import { AppContainer } from './App.styles'
import ShowResult from './component/show-result/show-result.component'
import { sample } from './sample-json/sample'

const App = () => {

  useEffect(()=>
    setResult(sample), []
  )

  const [searchTerm, setSearchTerm] = useState("");

  const [result, setResult] = useState([]);

  const handleChange = event => {
    const { value } = event.target;
    setSearchTerm(value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setResult(sample.filter(element =>
      element.skills.toLowerCase() === searchTerm.toLowerCase()));

      //this part will be replaced with redux in the later update -Julian- 

    setSearchTerm("");
    
  }

  return (
    <AppContainer className="App">
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
      />
      <ShowResult result={result} />
    </AppContainer>
  );
}

export default App;
