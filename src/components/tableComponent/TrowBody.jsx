import TdataBody from "./TdataBody"

export default function TrowBody({data, columns}) {

    return (
        <>
            {data.map(
                (row, index) => (
            
                <tr key={row.id}>
                    <TdataBody
                        row={row}  
                        columns={columns}
                    />
                </tr>)
                )
            }
        </>
    )
}