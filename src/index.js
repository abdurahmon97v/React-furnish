import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    background-color:  #fff;
    font-family: 'Roboto', sans-serif;
  }
  
  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin: 0;
  }
  p{
    margin: 0;
  }
  .container {
    max-width: 1440px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


