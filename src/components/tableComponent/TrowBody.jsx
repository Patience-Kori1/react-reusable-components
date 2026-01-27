import TdataBody from "./TdataBody"
import TdataBodyAction from "./TdataBodyAction"

export default function TrowBody({data, columns, onAction, onEdit,divAction, textButtonEditAction}) {
    // console.log(data)
   
    return (
        <>
            {data.map(
                (row, index) => (
                    
                <tr key={row.id}>
                    <TdataBody
                        row={row}  
                        columns={columns}
                    />
                    {/* {console.log(row.id)} */}
                    <TdataBodyAction
                        row={row}  
                        columns={columns}
                        onAction={onAction}
                        onEdit={onEdit}
                        divAction={divAction}
                        textButtonEditAction={textButtonEditAction}
                    />
                </tr>)
                )
            }
        </>
    )
}