import React from "react";
import ReactDOM from "react-dom";
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import store from './Redux/store';
import {Provider} from 'react-redux';


ReactDOM.render(
<Provider store = {store}> 
<App />
</Provider>, 

document.getElementById("root"));
