import React from 'react';
import Router from './router/Router';
import GlobalStyles from './style/GlobalStyles';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Router />
    </div>
  );
}

export default App;
