import React from 'react';

const Salida=({num=0})=>{

    /*function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
*/
if(num==1){return<>
  <img  className='cel1 con img-thumbnail'src={'https://e7.pngegg.com/pngimages/878/184/png-clipart-circle-point-white-black-m-exquisite-icon-white-monochrome.png'}/>
  </>
}



return<>
<img  className='cel1 con img-thumbnail'src={'https://icon-library.com/images/half-circle-icon/half-circle-icon-4.jpg'}/>
</>
}



export default Salida;


