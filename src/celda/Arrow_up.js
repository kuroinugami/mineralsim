import React from 'react';
import prom from '../data/funtion_dysplay';
const Arrow_up=({num})=>{

    /*function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
*/
return<>
<button id='cel1' onClick={()=>prom(num)}><img className='img-thumbnail'src={'https://toppng.com/uploads/preview/arrow-up-black-up-arrow-115632617737cvxxumden.png'}/>
</button></>
}



export default Arrow_up;


