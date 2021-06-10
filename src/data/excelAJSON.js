let XLSX = require("xlsx")

const ExcelAJSON=()=>{
    const excel = XLSX.readFile("")
    var nombreHoja=excel.SheetNames
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])
    console.log(datos)
}
ExcelAJSON()