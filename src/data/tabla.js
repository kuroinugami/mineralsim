import React from 'react'
import Truncate from '../data/Truncado';
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'


const vectores=[{"nombre":"vector1"            
,"densidad":123
,"porcSolido":1
,"ley":1
,"caudalP":2
,"MPulpa":3
,"MSolido":4
,"Fino":5
,"tipo":"tipo1"
},
{"nombre":"vector2"           
,"densidad":123
,"porcSolido":1
,"ley":2
,"caudalP":2
,"MPulpa":3
,"MSolido":4
,"Fino":2
,"tipo":"tipo1"
}]

const columnas=[
    {
        name: 'ID',
        selector: 'nombre',
        sortable: 'true'
    },
    {
        name: 'Densidad(ton/m3)',
        selector: 'densidad',
        sortable: 'true'
    },
    {
        name: 'Porcentaje de sólido(%)',
        selector: 'porcSolido',
        sortable: 'true'
    },
    {
        name: 'Ley(%)',
        selector: 'ley',
        sortable: 'true'
    },
    {
        name: 'Caudal(m3/hr)',
        selector: 'caudalP',
        sortable: 'true'
    },
    {
        name: 'Masa pulpa(ton/hr)',
        selector: 'MPulpa',
        sortable: 'true'
    },
    {
        name: 'Masa solido(ton/hr)',
        selector: 'MSolido',
        sortable: 'true'
    },
    {
        name: 'Fino(ton/hr)',
        selector: 'Fino',
        sortable: 'true'
    }
]

const paginacionOpciones={
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

function TableVector(){
    return(
        <div className="table-responsive">
            <DataTable 
                columns={columnas}
                data={vectores}
                title="Flujos ingresados"
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}



/*

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

function listarV(listarV) {
    for (const vector in listaVector) {
        viewVector(vector)
    }

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
                    {% for  vector in listaVector %} 
                        <>viewVector(vector)</>
                    {%endfor%}
                </script>
            </thead>
            
        </table>
        </>
    )
}

function tablaBalance(listaVectores) {
    
}

*/
export default tablaVector
    

