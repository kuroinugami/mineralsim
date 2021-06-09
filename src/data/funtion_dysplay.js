
const propi=(num)=>{
    for (let index = 0; index < 16; index++) {
        if(num==index){
            document.getElementById(`dit${index}`).style.display='block';
        }else{document.getElementById(`dit${index}`).style.display='none';}
        
    }
if(num=='g'){
    document.getElementById(`ditg`).style.display='block';
    
}else{ document.getElementById(`ditg`).style.display='none';}
if(num=='R'){
    document.getElementById(`ditR`).style.display='block';
    
}else{ document.getElementById(`ditR`).style.display='none';}

}
export default propi;