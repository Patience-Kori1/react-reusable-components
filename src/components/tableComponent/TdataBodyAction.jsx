export default function TdataBodyAction({row, columns}) {
    
    return (
        <>
            <td key={row.id}>Supprimer {row.first_name}</td>
            {/* {
                console.log(row)
            } */}
        </>
    )
}