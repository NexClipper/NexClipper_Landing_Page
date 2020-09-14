import React from 'react';
import GlobalStyles from './style/GlobalStyles';
import Home from './components/Home';
import Product from './components/Product';
import Whatwe from './components/Whatwe';
import Manual from './components/Manual';
import Content from './components/Content';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
      <Whatwe id="whatwe" />
      <Product id="product" />
      <Manual id="manual" />
      <Content id="content" />
    </div>
  );
}

export default App;
