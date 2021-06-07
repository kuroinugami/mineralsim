import React, {useState} from 'react';
import Vector from '../data/vector';
import Truncate from '../data/Truncado';
const Panel=({num})=>{
    
 
    const [data1,setdata1]=useState(0);
    const [data2,setdata2]=useState(0);
    const [data3,setdata3]=useState(0);



const calcular=()=>{
const dt1 =document.getElementById('dt1'+num).value;
const dt2 =document.getElementById('dt2'+num).value;
const dt3 =document.getElementById('dt3'+num).value;
const dt4 =document.getElementById('dt4'+num).value;
/*setdata1((c)=>Vector('vec'+num,dt1,dt2,dt3,dt4).MPulpa);
setdata2((c)=>Vector('vec'+num,dt1,dt2,dt3,dt4).MSolido);
setdata3((c)=>Vector('vec'+num,dt1,dt2,dt3,dt4).Fino);
*/

setdata1((c)=>Truncate(Vector('vec'+num,dt1,dt2,dt3,dt4).MPulpa,3));
setdata2((c)=>Truncate(Vector('vec'+num,dt1,dt2,dt3,dt4).MSolido,3));
setdata3((c)=>Truncate(Vector('vec'+num,dt1,dt2,dt3,dt4).Fino,3));
}


const main=<>
<div className='container-sm'>
    
<div className='row'>

<table className='col-6'  border = "1">
    <tbody>
<tr><td>Densidad(T/m3)</td><td><input type='text' id= {'dt1'+num} defaultValue= '0'/></td></tr>
<tr><td>Solido(%)</td><td><input type='text'id={'dt2'+num}defaultValue= '0'/></td></tr>
<tr><td>Ley(%)</td><td><input type='text'id={'dt3'+num}defaultValue= '0'/></td></tr>
<tr><td>Caudal(m3/h)</td><td><input type='text'id={'dt4'+num}defaultValue= '0'/></td></tr>
</tbody>
</table>
<table className='col-6'  border = "1">
<tbody>
<tr><td>Masa Pulpa(T/h)</td><td><p id={'MP1'+num}>{data1}</p></td></tr>
<tr><td>Masa Solido(T/h)</td><td><p id={'MP2'+num}>{data2}</p></td></tr>
<tr><td>Fino(T/h)</td><td><p id={'MP3'+num}>{data3}</p></td></tr>
</tbody>
</table>
</div>
<div className='row'>
<button onClick={calcular}>Calcular</button>
</div>
</div>

</>;

return main;

}




export default Panel;