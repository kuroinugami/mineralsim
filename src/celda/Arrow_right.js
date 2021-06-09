import React from 'react';
import prom from '../data/funtion_dysplay';
import img from '../Recursos/img/Arrow.png';
import img2 from '../Recursos/img/Arrow_Left.png';
import img3 from '../Recursos/img/Arrow_right.png';
const Arrow_right=({num,type=0})=>{

    /*function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
*/
let gmi;

if(type==0){ gmi=img;}
if(type==1){ gmi=img2;}
if (type==2){ gmi=img3;}
return<>
<button  className='cel1 con' onClick={()=>prom(num)}><img id={'Arrow'+num} className='img-thumbnail t270 'src={gmi}/>
</button></>
}



export default Arrow_right;



