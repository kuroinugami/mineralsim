import React from 'react';
import {useDrag} from 'react-dnd';
const Arrow_down=()=>{

    function drag(ev) { 
        ev.dataTransfer.setData("text", ev.target.id);
        console.log('test drag');
        console.log(ev);
      }

return<> <img id='drag1' className='img-thumbnail' draggable='true' onDragStart='(event)=>drag(event)' src={'https://toppng.com/uploads/preview/down-arrow-black-arrow-down-11562910488ntpji5lifi.png'}/>
<string>
function drag(ev) { 
        ev.dataTransfer.setData("text", ev.target.id);
        console.log('test drag');
        console.log(ev);
      }

</string>
</>
}



export default Arrow_down;



