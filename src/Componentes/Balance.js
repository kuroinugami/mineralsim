import React,{useState} from 'react';





const Balance=()=>{


const [data1, setdata1] = useState(0);
const [data2, setdata2] = useState(0);
const [data3, setdata3] = useState(0);
const [data4, setdata4] = useState(0);
const [data5, setdata5] = useState(0);
const [data6, setdata6] = useState(0);

    return <>
    <table>
<thead><tr><td></td><td>Diferencia</td><td>%ERROR</td></tr></thead>
<tbody>
<tr><td>MP</td><td>{data1}</td><td>{data4}</td></tr>
<tr><td>MS</td><td>{data2}</td><td>{data5}</td></tr>
<tr><td>MF</td><td>{data3}</td><td>{data6}</td></tr>
</tbody>


        </table>
    
    
    </>





}