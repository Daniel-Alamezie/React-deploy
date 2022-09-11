import { Component } from 'react';
import '../styles/globals.css'
import Nav_Bar from '../components/Nav_Bar';


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Nav_Bar/>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
