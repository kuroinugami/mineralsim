import React from 'react';
import prom from '../data/funtion_dysplay';
const Arrow_right=({num})=>{

    /*function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
*/
return<>
<button id='cel1' onClick={()=>prom(num)}><img  className='img-thumbnail'src={'https://image.flaticon.com/icons/png/512/25/25426.png'}/>
</button></>
}



export default Arrow_right;



