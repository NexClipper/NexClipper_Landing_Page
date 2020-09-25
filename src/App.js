import React from 'react';
import GlobalStyles from './style/GlobalStyles';
import Home from './components/Home';
import Product from './components/Product';
import Whatwe from './components/Whatwe';
import Nav from './components/Nav';
import { Helmet } from 'react-helmet';
import Tester from './components/Tester';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="description"
          content="service.nexclipper"
          data-react-helmet="true"
        />
        <title>NexClipper | Service</title>
      </Helmet>
      <GlobalStyles />
      <Nav />
      <Home />
      <Whatwe id="whatwe" />
      <Product id="product" />
      <Tester />
    </div>
  );
}

export default App;
