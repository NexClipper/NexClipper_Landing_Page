import React from 'react';
import GlobalStyles from './style/GlobalStyles';
import Home from './components/Home';
import Product from './components/Product';
import Whatwe from './components/Whatwe';
import Manual from './components/Manual';
import Content from './components/Content';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router />
      <Home />
      <Whatwe />
      <Product />
      <Manual />
      <Content />
    </div>
  );
}

export default App;
