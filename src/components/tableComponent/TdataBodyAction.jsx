export default function TdataBodyAction({row, columns}) {
    
    return (
        
        <td key={columns.key}>Supprimer {row.first_name}</td>
    
    )
}