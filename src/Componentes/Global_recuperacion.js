import React,{useState}  from 'react';
import  Vector,{RecupMasa,RecupLey} from '../data/vector';
import Truncado from '../data/Truncado';

const G_recuperacion=()=>{

    const [data12,setdata12]=useState(0);
    const [data13,setdata13]=useState(0);
    const [data14,setdata14]=useState(0);
    const [data15,setdata15]=useState(0);
    const [data16,setdata16]=useState(0);
    const [data17,setdata17]=useState(0);
    const [data18,setdata18]=useState(0);
    const [data19,setdata19]=useState(0);
    const [data20,setdata20]=useState(0);
    const [data21,setdata21]=useState(0);
    const [data1,setdata1]=useState(0);
    const [data2,setdata2]=useState(0);
    const [data3,setdata3]=useState(0);
    const [data4,setdata4]=useState(0);
    const [data5,setdata5]=useState(0);
    const [data6,setdata6]=useState(0);
    const [data7,setdata7]=useState(0);
    const [data8,setdata8]=useState(0);
    const [data9,setdata9]=useState(0);
    const calcular=()=>{
        const dt1 =document.getElementById('dt27').value;
        const dt2 =document.getElementById('dt214').value;
        const dt3 =document.getElementById('dt25').value;
        setdata12((c)=>dt1);
        setdata13((c)=>dt2);
        setdata14((c)=>dt3);
        setdata1((c)=>document.getElementById('MP17').innerHTML);
        setdata2((c)=>document.getElementById('MP27').innerHTML);
        setdata3((c)=>document.getElementById('MP15').innerHTML);
        setdata4((c)=>document.getElementById('MP25').innerHTML);
        setdata5((c)=>document.getElementById('MP114').innerHTML);
        setdata6((c)=>document.getElementById('MP214').innerHTML);
        setdata7((c)=>document.getElementById('dt37').value);
        setdata8((c)=>document.getElementById('dt35').value);
        setdata9((c)=>document.getElementById('dt314').value);
/*const VAlimentacion= Vector('VAlimentacion',
document.getElementById('dt17').value,
document.getElementById('dt27').value,
document.getElementById('dt37').value,
document.getElementById('dt47').value,);
const VRelave =Vector('VRelave',
document.getElementById('dt15').value,
document.getElementById('dt25').value,
document.getElementById('dt35').value,
document.getElementById('dt45').value,);
const VConcentrado=Vector('VConcentrado',
document.getElementById('dt114').value,
document.getElementById('dt214').value,
document.getElementById('dt314').value,
document.getElementById('dt414').value,);*/

const ListVAlimentacion=[
JSON.parse(window.sessionStorage.getItem("dtv9")),
JSON.parse(window.sessionStorage.getItem("dtv1"))];
const ListVConcentrado=[
    JSON.parse(window.sessionStorage.getItem("dtv15")),
    JSON.parse(window.sessionStorage.getItem("dtv12")),
    JSON.parse(window.sessionStorage.getItem("dtv10")),
    JSON.parse(window.sessionStorage.getItem("dtv11"))];
const ListVRelave=[
        JSON.parse(window.sessionStorage.getItem("dtv5"))];
console.log(ListVAlimentacion,ListVConcentrado,ListVRelave)
const RM = RecupMasa(ListVAlimentacion,ListVConcentrado);
        setdata15((c)=>Truncado(RM.concComun,3));
        setdata16((c)=>Truncado(RM.alimentacion,3));
        setdata17((c)=>Truncado(RM.recuperacion,3));
const RL = RecupLey(ListVAlimentacion,ListVRelave,ListVConcentrado);
        setdata18((c)=>Truncado(RL.concComun));
        setdata19((c)=>Truncado(RL.alimentacion));
        setdata20((c)=>Truncado(RL.rechazo));
        setdata21((c)=>Truncado(RL.recuperacion));
        }





return <>
<div className='container-sm'>
    
<div className='row'>

<table className=' col-4'  border = "1">
    <thead><tr><td><p className='textcolor1'><strong>Alimentacion</strong></p></td></tr></thead>
    <tbody>
<tr><td>Solido(%)</td><td>{data12}</td></tr>
<tr><td>Masa pulpa(T/h)</td><td>{data1}</td></tr>
<tr><td>Masa solido(T/h)</td><td>{data2}</td></tr>
<tr><td>Ley(%)</td><td>{data7}</td></tr>
</tbody>
</table>
<table className=' col-4'  border = "1">
    <thead><tr><td><p className='textcolor2'><strong>Relave</strong></p></td></tr></thead>
    <tbody>
<tr><td>Solido(%)</td><td>{data14}</td></tr>
<tr><td>Masa pulpa(T/h)</td><td>{data3}</td></tr>
<tr><td>Masa solido(T/h)</td><td>{data4}</td></tr>
<tr><td>Ley(%)</td><td>{data8}</td></tr>
</tbody>
</table>
<table className=' col-4'  border = "1">
    <thead><tr><td><p className='textcolor3'><strong>Concentrado</strong></p></td></tr></thead>
    <tbody>
<tr><td>Solido(%)</td><td>{data13}</td></tr>
<tr><td>Masa pulpa(T/h)</td><td>{data5}</td></tr>
<tr><td>Masa solido(T/h)</td><td>{data6}</td></tr>
<tr><td>Ley(%)</td><td>{data9}</td></tr>
</tbody>
</table>
</div>
<div className='row'>
<table border = "1">
<thead>
    <tr><td  colSpan = {"2"} ><strong>Recuperacion masica</strong></td></tr>
</thead>
<tbody>
<tr><td>Concentrado comun</td><td>{data15}</td></tr>
<tr><td>Alimentacion</td><td>{data16}</td></tr>
<tr><td>Recuperacion</td><td>{data17}</td></tr>
    </tbody>
</table>
</div>
<div className='row'>
<table border = "1">
<thead>
    <tr><td  colSpan = {"2"} ><strong>Recuperacion por leyes</strong></td></tr>
</thead>
<tbody>
<tr><td>Concentrado comun</td><td>{data18}</td></tr>
<tr><td>Alimentacion</td><td>{data19}</td></tr>
<tr><td>Rechazo</td><td>{data20}</td></tr>
<tr><td>Recuperacion</td><td>{data21}</td></tr>
    </tbody>
</table>
</div>
<div className='row'>
<button onClick={calcular}>Calcular</button>
</div>
</div>
</>;}

export default G_recuperacion;