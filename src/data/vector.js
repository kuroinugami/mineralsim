function Vector(densidadP1=0,porcSolido1=0,ley1=0,caudalP1=0){

    const densidadP= densidadP1;
    const porcSolido=porcSolido1/100;
    const ley=ley1/100;
    const caudalP=caudalP1;


    const calMPulpa = ()=>(caudalP*densidadP)    
    const calMSolido = () => (calMPulpa()*porcSolido)
    const calFino = () => (ley*calMSolido())
    
   const MPulpa= calMPulpa();
    const MSolido= calMSolido();
    const Fino= calFino();
const data= [MPulpa,MSolido,Fino]

return data;
    //this.MostrarDatos= function(){   return [this.calMPulpa,this.calMSolido,this.calFino]   }

}



export default Vector;