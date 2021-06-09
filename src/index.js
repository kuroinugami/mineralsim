import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Celda from './celda/casilla';
import Arrow_down from './celda/Arrow_down';
import Arrow_up from './celda/Arrow_up';
import Arrow_left from './celda/Arrow_left';
import Arrow_right from './celda/Arrow_right';
import Line_Horizon from './celda/Line_Horizon';
import Line_Vertical from './celda/Line_Vertical';
import Down_left from './celda/Down_left';
import Down_right from './celda/Down_right';
import Up_Left from './celda/Up_Left';
import Up_right from './celda/Up_right';
import Omega from './celda/Omega';
import Alimentacion from './celda/Alimentacion';
import Capsula_Flotacion from './celda/Capsula_Flotacion';
import Nodos from './celda/Nodos';
import Salida from './celda/Salida';
import Propiedades from './Componentes/Propiedades';
import G_recuperacion from './Componentes/Global_recuperacion';
import table from './data/tabla'
import prom from './data/funtion_dysplay';
//import ViewR from './data/tabla';
const Main= ()=>{

  return<>

<div className={'row justify-content-center'}>
<div className={'col align-self-center'}>
<table border = {"1"} cellSpacing= {"0"} cellPadding = {"0"}>
  <tbody>
  <tr><td><Celda/></td><td><Celda/></td><td><Celda/></td><td><Celda/></td><td><Celda/></td><td><Arrow_down num='0' type='1'/></td><td><Line_Horizon/></td><td><Line_Horizon/></td><td><Line_Horizon/></td><td><Line_Horizon/></td><td><Line_Horizon/></td><td><Down_left/></td><td><Celda/></td><td><Celda/></td></tr>
<tr><td><Celda/></td><td><Celda/></td><td><Arrow_right num='1' type='2'/></td><td><Capsula_Flotacion text='R2'/></td><td><Arrow_right num='2'/></td><td><Nodos/></td><td><Arrow_right num='3'/></td><td><Capsula_Flotacion text='ExR'/></td><td><Arrow_right num='4' /></td><td><Capsula_Flotacion text='S1'/></td><td><Line_Horizon/></td><td><Omega/></td><td><Arrow_right num='5'/></td><td><Salida num='1'/></td></tr>
<tr><td><Celda/></td><td><Celda/></td><td><Line_Vertical/></td><td><Line_Vertical/></td><td><Celda/></td><td><Arrow_up num='6'/></td><td><Celda/></td><td><Line_Vertical/></td><td><Celda/></td><td><Line_Vertical/></td><td><Celda/></td><td><Line_Vertical/></td><td><Celda/></td><td><Celda/></td></tr>
<tr><td><Alimentacion/></td><td><Arrow_right num='7'/></td><td><Nodos/></td><td><Up_right/></td><td><Line_Horizon/></td><td><Omega/></td><td><Down_left/></td><td><Line_Vertical/></td><td><Celda/></td><td><Arrow_right num='8' type='1'/></td><td><Capsula_Flotacion text='C1'/></td><td><Up_Left/></td><td><Celda/></td><td><Celda/></td></tr>
<tr><td><Celda/></td><td><Celda/></td><td><Line_Vertical/></td><td><Celda/></td><td><Celda/></td><td><Line_Vertical/></td><td><Line_Vertical/></td><td><Line_Vertical/></td><td><Celda/></td><td><Celda/></td><td><Line_Vertical/></td><td><Celda/></td><td><Celda/></td><td><Celda/></td></tr>
<tr><td><Celda/></td><td><Celda/></td><td><Arrow_right num='9' type='1'/></td><td><Capsula_Flotacion text='R1'/></td><td><Line_Horizon/></td><td><Up_Left/></td><td><Line_Vertical/></td><td><Arrow_down num='10'/></td><td><Celda/></td><td><Celda/></td><td><Arrow_down num='11' /></td><td><Celda/></td><td><Celda/></td><td><Celda/></td></tr>
<tr><td><Celda/></td><td><Celda/></td><td><Celda/></td><td><Line_Vertical/></td><td><Celda/></td><td><Celda/></td><td><Arrow_right num='12' type='1'/></td><td><Nodos/></td><td><Line_Horizon/></td><td><Arrow_right num='13'/></td><td><Nodos/></td><td><Line_Horizon/></td><td><Arrow_right num='14'/></td><td><Salida/></td></tr>
<tr><td><Celda/></td><td><Celda/></td><td><Celda/></td><td><Up_right/></td><td><Line_Horizon/></td><td><Line_Horizon/></td><td><Line_Horizon/></td><td><Arrow_up num='15' type='1'/></td><td><Celda/></td><td><Celda/></td><td><Celda/></td><td><Celda/></td><td><Celda/></td><td><Celda/></td></tr>
</tbody>
  </table>
</div>
</div>

  </>
}
const aux=()=>{

  prom('R')
    ReactDOM.render(table(),
    document.getElementById('ditR'))
  
}

const Propi=()=>{
return<>
<div className='row'>
<div className='col'><button onClick={()=>prom('g')} >Balance de Solido</button></div>
<div className='col'><button onClick={()=>aux()
} >Visualizar Reporte</button>
</div>
</div>
<div className='row'>
<div className='col-10' id='con'>
<div id='dit0' style={{display: 'none'}}><Propiedades num='0'/></div>
<div id='dit1' style={{display: 'none'}}><Propiedades num='1'/></div>
<div id='dit2' style={{display: 'none'}}><Propiedades num='2'/></div>
<div id='dit3' style={{display: 'none'}}><Propiedades num='3'/></div>
<div id='dit4' style={{display: 'none'}}><Propiedades num='4'/></div>
<div id='dit5' style={{display: 'none'}}><Propiedades num='5'/></div>
<div id='dit6' style={{display: 'none'}}><Propiedades num='6'/></div>
<div id='dit7' style={{display: 'none'}}><Propiedades num='7'/></div>
<div id='dit8' style={{display: 'none'}}><Propiedades num='8'/></div>
<div id='dit9' style={{display: 'none'}}><Propiedades num='9'/></div>
<div id='dit10' style={{display: 'none'}}><Propiedades num='10'/></div>
<div id='dit11' style={{display: 'none'}}><Propiedades num='11'/></div>
<div id='dit12' style={{display: 'none'}}><Propiedades num='12'/></div>
<div id='dit13' style={{display: 'none'}}><Propiedades num='13'/></div>
<div id='dit14' style={{display: 'none'}}><Propiedades num='14'/></div>
<div id='dit15' style={{display: 'none'}}><Propiedades num='15'/></div>
<div id='ditg' style={{display: 'none'}}><G_recuperacion/></div>
<div id='ditR' style={{display: 'none'}} >{}</div>
</div>
</div>
</>


}
/*
const cargarView =()=>{


  ReactDOM.render(ViewR(list()),
    document.getElementById('ditR')
  );
  

}
*/
const list =()=>{
  const List=[]
  for (let index = 0; index < 16; index++) {
    
    list[index]=JSON.parse(window.sessionStorage.getItem("dtv"+index));
  }
return list;
}



ReactDOM.render(<Main/>,
  document.getElementById('main')
);

ReactDOM.render(<Propi/>,
  document.getElementById('tab')
);


const Tool =()=>{


  return <>
  <div className='row'>
<table className='col' border='1'>
  <tbody>
<tr><td><Capsula_Flotacion/></td><td>Celda de flotación</td></tr>
  </tbody>
</table>
  </div>
  <div className='row'>
  <table className='col' border='1'>
  <tbody>
<tr><td><Alimentacion/></td><td>Alimentación</td></tr>
  </tbody>
</table>
  </div>
  <div className='row'>
  <table className='col' border='1'>
  <tbody>
<tr><td><Salida /></td><td>Salida de concentrado</td></tr>
  </tbody>
</table>
  </div>
  <div className='row'>
  <table className='col' border='1'>
  <tbody>
<tr><td><Salida num='1'/></td><td>Salida Relave</td></tr>
  </tbody>
</table>
  </div>
  <div className='row'>
  <table className='col' border='1'>
  <tbody>
<tr><td><Nodos/></td><td>Nodo</td></tr>
  </tbody>
</table>
  </div>
  <div className='row'>
  <table className='col' border='1'>
  <tbody>
<tr><td><Arrow_right/></td><td>Flujo de pulpa</td></tr>
  </tbody>
</table>
  </div>
  
  
  
  </>
}


ReactDOM.render(<Tool/>,
  document.getElementById('tool')
);