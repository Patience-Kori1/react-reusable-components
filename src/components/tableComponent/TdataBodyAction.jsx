export default function TdataBodyAction({row, columns, onAction}) {

    return (
        <>
            <td>
                <button key={row.id} type="button" onClick={() => onAction(row)}>Dire Bonjour</button>
            </td>
        </>
    )
}