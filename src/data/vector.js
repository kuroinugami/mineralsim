
/*
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
*/
function Vector(nombre1="nn",densidadP1=0,porcSolido1=0,ley1=0,caudalP1=0){
    
    const calMPulpa = ()=>(caudalP1*densidadP1)    
    const calMSolido = () => (calMPulpa()*porcSolido1)
    const calFino = () => (ley1*calMSolido()) 

    const MPulpa1= calMPulpa();
    const MSolido1= calMSolido();
    const Fino1= calFino();

    return  {nombre:nombre1            
            ,densidad:densidadP1
            ,porcSolido:porcSolido1
            ,ley:ley1
            ,caudalP:caudalP1
            ,MPulpa:MPulpa1
            ,MSolido:MSolido1
            ,Fino:Fino1
        }
}

function Celda(nombre="celda",VEntrada,VConcentrado,VRelave){
    return {nombre:nombre,
            VEntrada:VEntrada,
            VConcentrado:VConcentrado,
            VRelave:VRelave
            }
}
/*
const sumaParam=(lista,param)=>{

    const suma= lista.map(vector=> vector[ `${param}` ]).reduce((total,vec)=>total+vec,0);       
    return suma
}

function sumaParam(lista,param){
    const suma =lista.map(function(vector){
        return vector[`${param}`]
    }).reduce(function(total,vec){
        return total+vec
    },0)
}
*/

function sumaMPulpa(lista){
    let suma=0
    for (let i = 0; i < lista.length; i++) {
        suma+=lista[i].MPulpa
    }
    return suma
}


function RecupMasa(listaVAlim,listaVConcentrado){
    
    const concComun=sumaMPulpa(listaVConcentrado)
    const alimentacion=sumaMPulpa(listaVAlim)
    const recuperacion=(concComun/alimentacion)*100
    console.log(concComun,alimentacion,recuperacion)
    return {concComun:concComun,
            alimentacion:alimentacion,
            recuperacion:recuperacion
    }
}
/*
function RecupLey(listaVAlim,listaVRelave,listaVConcentrado){
    return{ concComun:concComun,
            alimentacion:alimentacion
            //TO BE CONTINUED    
        }
}
*/


export { 
Vector as default,
Celda,
sumaMPulpa,
RecupMasa,
//RecupLey
};