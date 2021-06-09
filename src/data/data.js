








const Buscarv=()=>{
const list=[]
for(let i=0;i<16;i++){
list[i]=window.sessionStorage.getItem("dtv"+i)
}
return list
}

export default Buscarv;