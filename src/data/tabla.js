import React from 'react'
import Truncate from '../data/Truncado';

function viewVector(vector){
    return(
        <tr>
            <td>{Truncate(vector.nombre)}</td>
            <td>{Truncate(vector.densidad)}</td>
            <td>{Truncate(vector.porcSolido)}</td>
            <td>{Truncate(vector.ley)}</td>
            <td>{Truncate(vector.caudalP)}</td>
            <td>{Truncate(vector.MPulpa)}</td>
            <td>{Truncate(vector.MSolido)}</td>
            <td>{Truncate(vector.Fino)}</td>
        </tr>
    )
}

function tablaVector(...listaVector){
    return(
        <>
        <table>
            
            <thead>
                <th>id</th>
                <th>Densidad(ton/m3)</th>
                <th>Porcentaje de sólido(%)</th>
                <th>Ley(%)</th>
                <th>Caudal(m3/hr)</th>
                <th>Masa pulpa(ton/hr)</th>
                <th>Masa solido(ton/hr)</th>
                <th>Fino(ton/hr)</th>
                <script>
                    for (const vector in listaVector) {
                        viewVector(vector)
                    }
                </script>
            </thead>
            
        </table>
        </>
    )
}
/*
function tablaBalance(listaVectores) {
    
}

*/
export default tablaVector
    