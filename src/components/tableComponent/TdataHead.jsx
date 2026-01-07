export default function TdataHead ({columns}) {
   
    return(
        <>
            {
                columns.map((column, index)=>(
                   
                    <th key={index}>{column.label}</th>
                ))
            }
        </>
    )
}