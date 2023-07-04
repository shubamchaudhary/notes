import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./JSX/App";
import Header from './JSX/header';
import Footer from './JSX/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div >
    <Header />
     <App />
    <Footer />
    </div>    ,
 document.getElementById("root")
);








