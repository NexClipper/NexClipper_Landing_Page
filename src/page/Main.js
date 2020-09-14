import React from 'react';
import Content from '../components/Content';
import Home from '../components/Home';
import Product from '../components/Product';
import Whatwe from '../components/Whatwe';
import Manual from '../components/Manual';

export default function Main() {
  return (
    <>
      <Home />
      <Whatwe />
      <Product />
      <Manual />
      <Content />
    </>
  );
}
