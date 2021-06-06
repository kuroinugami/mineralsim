import React from 'react';
import Box1 from '../celda/casilla';
import Box2 from '../celda/Arrow_down';
import Box3 from '../celda/Arrow_up';
import Box4 from '../celda/Arrow_left';
import Box5 from '../celda/Arrow_right';
import Box6 from '../celda/Line_Horizon';
import Box7 from '../celda/Line_Vertical';
import Box8 from '../celda/Alimentacion';
import Box9 from '../celda/Capsula_Flotacion';
import Box10 from '../celda/Nodos';
import Box11 from '../celda/Salida';
import Box12 from '../celda/Down_left';
import Box13 from '../celda/Down_right';
import Box14 from '../celda/Up_Left';
import Box15 from '../celda/Up_right';
import Box16 from '../celda/Omega';



const Box=(num=1,pop=1)=>{
switch(num){
//celda
  case 1:
      return <Box1/>;
  break;
  //Arrow_down
  case 2:
    return<Box2 num={pop}/>;
  break;
  //Arrow_up
  case 3:
    return<Box3 num={pop}/>;
  break;
  //Arrow_left
  case 4:
    return <Box4 num={pop}/>;
  break;
  //Arrow_right
  case 5:
    return <Box5 num={pop}/>;
  break;
  //Line_horizon
  case 6:
    return <Box6/>;
  break;
  //Line_Vertical
  case 7:
    return <Box7/>;
  break;
  //Alimentacion
  case 8:
    return <Box8/>;
  break;
  //Celda_flotacion
  case 9:
    return <Box9/>;
  break;
  //Nodos
  case 10:
    return <Box10/>;
  break;
  //Salida
  case 11:
    return <Box11 num={pop}/>;
  break;
  //Down_left
  case 12:
    return <Box12/>;
  break;
  //Down_right
  case 13:
    return <Box13/>;
  break;
  //Up_left
  case 14:
    return <Box14/>;
  break;
  //Up_right
  case 15:
    return <Box15/>;
  break;
  //Omega
  case 16:
    return <Box16/>;
  break;

}


}

export default Box;