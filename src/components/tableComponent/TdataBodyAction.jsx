export default function TdataBodyAction({row, columns, onAction, onEdit}) {
     const divActionDefault = (
         <>
            <td>
                <button
                    type="button"
                    onClick={() => onEdit(row)}
                >
                Modifier
                </button>
                <button key={row.id} type="button" onClick={() => onAction(row)}>Dire Bonjour</button>
            </td>
        </>
     )
    return (
       divActionDefault
    )
}