import React from 'react';
import ReactDOM from 'react-dom';
import { useDrag } from 'react-dnd'
import Celda from './Componentes/casilla';
import Arrow_down from './Componentes/Arrow_down';
import './index.css';

ReactDOM.render(<><Celda num='1'/></>,
  document.getElementById('main')
);

ReactDOM.render(<><Arrow_down /><Arrow_down/></>,document.getElementById('tool'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
