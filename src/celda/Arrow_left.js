import React from 'react';
import prom from '../data/funtion_dysplay';
const Arrow_left=({num})=>{

    /*function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
*/
return<>
<button id='cel1' onClick={()=>prom(num)}><img  className='img-thumbnail'src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Arrow_left.svg/1024px-Arrow_left.svg.png'}/>
</button></>
}



export default Arrow_left;

