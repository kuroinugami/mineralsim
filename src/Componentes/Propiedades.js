import React, {useState} from 'react';
import Vector from '../data/vector';

const Panel=({num})=>{
    
 
    const [data1,setdata1]=useState(0);
    const [data2,setdata2]=useState(0);
    const [data3,setdata3]=useState(0);


   
    


 const calcular=()=>{
const dt1 =document.getElementById('dt1'+num).value;
const dt2 =document.getElementById('dt2'+num).value;
const dt3 =document.getElementById('dt3'+num).value;
const dt4 =document.getElementById('dt4'+num).value;
console.log(Vector(dt1,dt2,dt3,dt4));
setdata1((c)=>Vector(dt1,dt2,dt3,dt4)[0]);
setdata2((c)=>Vector(dt1,dt2,dt3,dt4)[1]);
setdata3((c)=>Vector(dt1,dt2,dt3,dt4)[2]);
const data ={
data1: dt1,
data2:dt2,
data3:dt3,
data4:dt4
}

}


const main=<>
<div className='container-sm'>
    
<div className='row'>

<table className='col-6'>
    <tbody>
<tr><td>Densidad</td><td><input type='text' id= {'dt1'+num} defaultValue= '0'/></td></tr>
<tr><td>Solido%</td><td><input type='text'id={'dt2'+num}defaultValue= '0'/></td></tr>
<tr><td>Ley</td><td><input type='text'id={'dt3'+num}defaultValue= '0'/></td></tr>
<tr><td>Caudal</td><td><input type='text'id={'dt4'+num}defaultValue= '0'/></td></tr>
</tbody>
</table>
<table className='col-6'>
<tbody>
<tr><td>CalMPulpa</td><td>{data1}</td></tr>
<tr><td>CalMSolido</td><td>{data2}</td></tr>
<tr><td>CalFino</td><td>{data3}</td></tr>
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