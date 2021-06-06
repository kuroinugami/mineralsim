/*
function Vector(densidadP1=0,porcSolido1=0,ley1=0,caudalP1=0){

    const densidadP= densidadP1;
    const porcSolido=porcSolido1;
    const ley=ley1;
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
*/
function Vector(nombre1="nn",densidadP1=0,porcSolido1=0,ley1=0,caudalP1=0){
    
    const densidadP= densidadP1;
    const porcSolido=porcSolido1;
    const ley=ley1;
    const caudalP=caudalP1;
    
    const calMPulpa = ()=>(caudalP*densidadP)    
    const calMSolido = () => (calMPulpa()*porcSolido)
    const calFino = () => (ley*calMSolido()) 

    const MPulpa1= calMPulpa();
    const MSolido1= calMSolido();
    const Fino1= calFino();

    return  {nombre:nombre1
            ,propiedades:
            {densidad:densidadP1
            ,porcSolido:porcSolido1
            ,ley:ley1
            ,caudalP:caudalP1
            ,MPulpa:MPulpa1
            ,MSolido:MSolido1
            ,Fino:Fino1}
        }
}

export default Vector;