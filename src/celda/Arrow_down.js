import React from 'react';
import prom from '../data/funtion_dysplay';
const Arrow_down=({num})=>{

    /*function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
*/
return<>
<button id='cel1' onClick={()=>prom(num)}><img  className='img-thumbnail'src={'https://toppng.com/uploads/preview/down-arrow-black-arrow-down-11562910488ntpji5lifi.png'}/>
</button>
</>
}



export default Arrow_down;



