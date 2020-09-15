import React from 'react';
import GlobalStyles from './style/GlobalStyles';
import Home from './components/Home';
import Product from './components/Product';
import Whatwe from './components/Whatwe';
import Nav from './components/Nav';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>NexClipper | Service</title>
      </Helmet>
      <GlobalStyles />
      <Nav />
      <Home />
      <Whatwe id="whatwe" />
      <Product id="product" />
    </div>
  );
}

export default App;
