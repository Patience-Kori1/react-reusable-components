import TdataBody from "./TdataBody"

export default function TrowBody({data}) {

    return (
        <>
            {data.map(
                (row, index) => (
            
                <tr key={index}>
                    <TdataBody
                        row={row}  
                    />
                </tr>)
                )
            }
        </>
    )
}