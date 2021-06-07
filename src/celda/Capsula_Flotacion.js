import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import img from '../Recursos/img/Celda.png';

//


const Capsula =({text=''})=>{
/*
    const data = [0,0,0,0];
    sessionStorage.setItem('registro'+1,data);
    sessionStorage.setItem('registro'+2,data);
    sessionStorage.setItem('registro'+3,data);
return (< >
<div className='container-sm'>
    <div className='row justify-content-center'>
<h2  className='col-6 text-center'>Hola mundo</h2>
</div>
<div className='row justify-content-center'>
<div className='col-4'>
    <button  onClick={(e)=>{propi(1)}}>
<img className='mw-100' src='https://www.pngix.com/pngfile/middle/517-5172845_arrow-right-png-flecha-hacia-la-derecha-transparent.png'/>
</button>
</div>
<div className='col-4'>
 <img className='mw-100' src={'https://www.911metallurgist.com/metalurgia/wp-content/uploads/2018/04/Celda-de-Flotaci%C3%B3n-Rougher-Cleaner-de-Minerales.jpg'}/>
</div>

<div className='col-4'>
<button  onClick={(e)=>{propi(2)}}>
<img className='mw-100'  src='https://www.pngix.com/pngfile/middle/517-5172845_arrow-right-png-flecha-hacia-la-derecha-transparent.png'/>
</button>
</div>
 </div>
 <div className='row justify-content-center'>
 <div className='col-4'>
 <button  onClick={(e)=>{propi(3)}}>
<img className='mw-100'  src='https://toppng.com/uploads/preview/down-arrow-black-arrow-down-11562910488ntpji5lifi.png'/>
</button>
 </div>
 </div>

</div>
</>);


}
const propi=(num)=>{

if(num==1){
    document.getElementById('p1').style.display='block';
    document.getElementById('p2').style.display='none';
    document.getElementById('p3').style.display='none';
}
if(num==2){
    document.getElementById('p1').style.display='none';
    document.getElementById('p2').style.display='block';
    document.getElementById('p3').style.display='none';
}
if(num==3){
    document.getElementById('p1').style.display='none';
    document.getElementById('p2').style.display='none';
    document.getElementById('p3').style.display='block';
}
}
    let panel=<>
    <div id='p1' style={{display: 'none'}}>
    <Panel num='1'/>
    </div>
    <div id='p2'style={{display: 'none'}}>
    <Panel num='2'/>
    </div>
    <div id='p3'style={{display: 'none'}}>
    <Panel num='3'/>
    </div>
    </>



ReactDOM.render(panel,
    document.getElementById('root2')
  );
  
*/




return <> <div className='Marco'><img className='cel1 con img-thumbnail' src={img}/><div className='centrado'>{text}</div></div> </>


}


export default Capsula;